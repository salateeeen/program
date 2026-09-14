const User = require('../Models/userModel.js');
const handleAsyncError = require(`../Error/asyncError.js`);
const appError = require('../Error/appError.js');
const factory = require(`../Utils/factoryController.js`)

const filterObj = function (obj, ...allowedFieldes) {
    const newObj = {};
    Object.keys(obj).forEach((ele) => {
        if (allowedFieldes.includes(ele)) {
            newObj[ele] = obj[ele]
        }
    })
    return newObj
}


const createUser = handleAsyncError(async (req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: `Please use /signUp to create user.`
    });
})

const setMeId = (req, res, next) => {
    req.params.id = req.user._id ;
    next()
}

const updateMe = handleAsyncError(async (req, res, next) => {
    if (req.body.password || req.body.confirmPassword) {
        return next(new appError(`This route is not for update password.`, 404))
    }
    const newObj = filterObj(req.body, `name`, `email`)
    
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
    await User.findByIdAndUpdate(req.user._id, { active: false })
    res.status(204).json({
        status: "success",
        data: "null"
    })
})

const getAllUsers = factory.getAll(User)
const getUser = factory.getOne(User)
const deleteUserByAdmin = factory.deleteOne(User)
const updateUserByAdmin = factory.updateOne(User)

module.exports = {
    getAllUsers,
    getUser,
    setMeId,
    createUser,
    updateMe,
    updateUserByAdmin,
    deleteMe,
    deleteUserByAdmin
}
