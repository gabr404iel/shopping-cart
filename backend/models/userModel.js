const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: {
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 0,
                },
            },
        ],
    },
});

//static signup method
userSchema.statics.signup = async function (name, email, password) {
    const exists = await this.findOne({ email });

    //validation checks done in static signup method
    if (!email || !password || !name) {
        throw Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is invalid');
    }

    if (!validator.isLength(name, { min: 3 })) {
        throw Error('Name must be at least 3 characters long');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    if (exists) {
        throw Error('Email already exists.');
    }

    //using bcrypt to hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, email, password: hash })

    return user
}

//static login method as the password is hashed
userSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('Incorrect Email or Password.');
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect Email or Password.');
    }

    return user
}

module.exports = mongoose.model('User', userSchema)
