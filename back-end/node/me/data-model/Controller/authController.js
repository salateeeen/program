const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require(`../Models/userModel.js`)
const handleAsyncError = require(`../Error/asyncError.js`)
const appError = require(`../Error/appError.js`);
const sendMail = require(`../Utils/email.js`);
const crypto = require('crypto');
const { request } = require('http');

const restrictTo = function (...roles) {
    //* console.log(`call in start running`);
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new appError(`You are not permission to perform this action.`, 403));
        }
        next();
    }
};

const createToken = function (id) {
    /// sign(paylosd:id, secretString, options)
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN
    })
}

const signup = handleAsyncError(async (req, res, next) => {
    const user = await User.create(req.body);

    const token = createToken(user._id)

    res.status(201).json({
        status: "success",
        data: {
            user
        },
        token
    });
})

const login = handleAsyncError(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new appError("Please provide us in your email and password.", 400));
    }

    const user = await User.findOne({ email }).select(`+password`);

    if (!user || !(await user.correct(password, user.password))) {
        return next(new appError("Email or password is not correct.", 401));
    }

    //? everything is ok send a token
    const token = createToken(user._id)

    res.status(200).json({
        status: "success",
        token
    });
})

const protect = handleAsyncError(async (req, res, next) => {
    let token;
    if (req.headers.authorization) {
        token = req.headers.authorization.split(` `)[1];
    }
    /// if we dont have token
    if (!token) {
        return next(new appError("You are not logged in, please log in.", 401));
    };

    /// if the token is not valid throw an error automaticly
    //$ decoded = {id, iat, exp}
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    //* decode exp in seconds , Date.now() in ms
    //# iat: issue or create a token, exp: expire time
    //? console.log(decoded.iat);
    //? console.log(Math.round(Date.now() / 1000));

    //& if the user dose not exist
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
        return next(new appError("The token belong to user dose not exist.", 401));
    }

    /// if the password change before token expire
    if (user.changedPasswordAfterCreateToken(decoded.iat)) {
        return next(new appError("Your password change after token is created.", 401));
    }

    //& to use req.user in the next middelware
    req.user = user;
    // req.filter = {}
    next();
})


const forgotPassword = handleAsyncError(async (req, res, next) => {
    if (!req.body || !req.body.email) {
        return next(new appError("Please write your email.", 404));
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new appError("No user with this email.", 404));
    }

    const resetToken = user.generateResetToken()
    /// save : even if you want to update some fieldes 
    /// you need to pass on all validations
    await user.save({
        validateBeforeSave: false
    })

    const resetURL = `${req.protocol}:\/\/${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to:
     ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

    //# send email
    await sendMail({
        email: user.email,
        subject: `Your password reset token will expire after 10 minutes`,
        message
    })

     res.status(201).json({
        status: "success",
        message: `Your token sent to email`
    });
})

const resetPassword = handleAsyncError(async function (req, res, next) {
    if (!req.params || !req.params.token) {
        return next(new appError("Please write your token.", 404));
    }
    /// hash token comming from paramrs
    const hashToken = crypto.createHash(`sha256`).update(req.params.token).digest(`hex`)

    //% compare between hashTokenParams and hashTokenDB
    const user = await User.findOne({
        passwordResetToken: hashToken,
        passwordResetExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new appError("The token is inavlid or has expired.", 400));
    }

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;

    /// token is used for one time
    user.passwordResetToken = undefined;
    user.passwordResetExpire = undefined;

    //? save dont need a validate because user comminf from DB
    //? have everything and we explicitly written a password
    await user.save();

    const token = createToken(user._id)

    res.status(201).json({
        status: "success",
        message: `Password updated succesfuly`,
        token
    });
})


const updatePassword = handleAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.user.email }).select(`+password`)

    if (!user.correct(req.body.password, user.password)) {
        return next(new appError("The password is not correct.", 401));
    }

    user.password = req.body.newPassword;
    user.confirmPassword = req.body.confirmNewPassword;
    await user.save()


    const token = createToken(user._id)

    res.status(201).json({
        status: "success",
        message: `Password updated succesfuly`,
        token,
    });
})

module.exports = {
    signup,
    login,
    protect,
    restrictTo,
    forgotPassword,
    resetPassword,
    updatePassword
}

