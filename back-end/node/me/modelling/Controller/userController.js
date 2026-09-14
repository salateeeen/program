const User = require('../Models/userModel.js');
const handleAsyncError = require(`../Error/asyncError.js`);
const appError = require('../Error/appError.js');

const filterObj = function (obj, ...allowedFieldes) {
    const newObj = {};
    Object.keys(obj).forEach((ele) => {
        if (allowedFieldes.includes(ele)) {
            newObj[ele] = obj[ele]
        }
    })
    return newObj
}

const getAllUsers = handleAsyncError(async (req, res, next) => {
    const users = await User.find().select(`-__v`)
    res.status(200).json({
        status: "success",
        result: users.length,
        data: { users }
    })
})

const getUser = handleAsyncError(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id).select(`-__v`)
    if (!user) {
        return next(new appError(`No user found wiht this id.`, 404))
    }
    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
})

const creatUser = handleAsyncError(async (req, res, next) => {
    const user = await User.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            user
        }
    });
})

const updateMe = handleAsyncError(async (req, res, next) => {
    if (req.body.password || req.body.confirmPassword) {
        return next(new appError(`This route is not for update password.`, 404))
    }

    const newObj = filterObj(req.body, `name`, `email`)

    /// update: validate just fieldes you`r pass 
    /// save: validate for all documents
    const user = await User.findByIdAndUpdate(req.user._id, newObj, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
})

const deleteMe = handleAsyncError(async (req, res, next) => {
    /// {new: true} just to return a new user to use in the next code
    const user = await User.findByIdAndUpdate(req.user._id, {active: false})
    console.log(user);

    res.status(204).json({
        status: "success",
        data: "null"
    })
})

module.exports = {
    getAllUsers,
    getUser,
    creatUser,
    updateMe,
    deleteMe,
}
