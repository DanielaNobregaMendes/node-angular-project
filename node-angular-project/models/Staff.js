const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema= new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
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
    telefone:{
        type: String,
        required: true,
        length: 9
    },
    password: {
        type: String,
        required: true
    },
    nif: {
        type: String,
        required: true,
        unique: true,
        length: 9
    },
    cc:{
        type: String,
        required: true,
        unique: true,
        length: 9
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive:{
        type: Boolean,
        default: true,
        required: true
    }

});

Schema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('Staff', Schema);