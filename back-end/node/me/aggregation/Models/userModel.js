const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `please tell us your name.`]
    },
    email: {
        type: String,
        required: [true, `please write your email.`],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, `write a valid email.`]
    },
    age : {
        type : Number,
        min : [14, `The age should be grater than 14.`]
    },
    role: {
        type: String,
        enum: [`user`, `guide`, `lead-guide`, `admin`],
        default: `user`
    },

    photo: String,

    active: {
        type: Boolean,
        default: true,
        select: false
    },

    password: {
        type: String,
        required: [true, `please provide us any password`],
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, `Please confirm your password.`],
        validate: {
            /// only whene create and save
            validator: function (confirmPassword) {
                return ele === this.password
            },
            message: "Password is not the same."
        }
    },
    passwordChangeAt: Date,

    passwordResetToken: String,
    passwordResetExpire: Date
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  static: false
})

userSchema.pre(`save`, async function (next) {
    if (!this.isModified(`password`)) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 12)
    
    //! delete confirmPassword feild
    this.confirmPassword = undefined;
    next()
})

userSchema.pre(`save`, function (next) {
    if (!this.isModified(`password`) || this.isNew) {
        return next()
    }
    this.passwordChange = Date.now() - 1000;
    next()
})

//* methods for all user instances
userSchema.methods.correct = async function (candidatPassword, userPassword) {
    return await bcrypt.compare(candidatPassword, userPassword)
}

userSchema.methods.changedPasswordAfterCreateToken = function (tokenTime) {
    if (this.passwordChange) {
        const changePasswordTime = this.passwordChange / 1000;
        return changePasswordTime > tokenTime;
    }
    return false;
}

userSchema.methods.generateResetToken = function () {
    /// random token to send to email 
    const resetToken = crypto.randomBytes(32).toString(`hex`);

    //$ hash token to save in db
    this.passwordResetToken = crypto.createHash(`sha256`).update(resetToken).digest(`hex`)
    this.passwordResetExpire = Date.now() + 10 * 60 * 1000
    return resetToken;
}

module.exports = mongoose.model(`User`, userSchema)