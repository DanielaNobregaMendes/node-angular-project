const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema= new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    morada:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true,
        length: 9
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    isActive:{
        type: Boolean,
        default: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

Schema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', Schema);