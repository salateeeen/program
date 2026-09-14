const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

//* Schema(schemaDefinition, options)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `please tell us your name.`]
    },
    email: {
        type: String,
        required: [true, `please write your email.`],
        //* unique is not validator
        unique: true,
        lowercase: true,
        //# object or array is the same
        validate: [validator.isEmail, `write a valid email.`]
    },
    age: {
        type: Number,
        min: [14, `The age should be grater than 14.`]
    },
    role: {
        type: String,
        //? enum is a validator for valid values
        enum: {
            values: [`user`, `guide`, `lead-guide`, `admin`],
            message: `The role is user, guide, lead-guide or admin.`
        },
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
        required: [true, `please provide us any password.`],
        minlength: [8, `Should be at least 8 character.`],
        select: false
    },

    confirmPassword: {
        type: String,
        required: [true, `Please confirm your password.`],
        //# object or array is the same
        //* validate then callBackFunction and pass the field
        validate: {
            /// only whene create and save
            //! function because this = undefind in () =>
            validator: function (confirmPassword) {
                return confirmPassword === this.password
            },
            message: "Password is not the same."
        }
    },
    passwordChangeAt: Date,

    passwordResetToken: String,
    passwordResetExpire: Date
},
    {
        /// data output as JSON
        toJSON: { virtuals: true },
        /// data output as Object
        toObject: { virtuals: true },
        /// to add fieldes even if we dont have in schema
        strict: false,
    }
)
userSchema.virtual(`birthYear`).get(function () {
    return new Date(Date.now() - this.age * 1000 * 60 * 60 * 24 * 365).toISOString();
})

/// only on save() and create() not update
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
    this.passwordChangeAt = Date.now() - 1000;
    next()
});

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