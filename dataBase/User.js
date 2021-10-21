const {Schema, model} = require('mongoose');

const {userRoles} = require('../configs');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: userRoles.USER,
        enum: Object.values(userRoles)

    },
    is_active: {
        type: Boolean,
        default: false,
        required: true
    }
}, {timestamps: true});

module.exports = model('user', userSchema);
