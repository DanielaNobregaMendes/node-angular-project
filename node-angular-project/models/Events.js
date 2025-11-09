const mongoose = require('mongoose');

const Schema= new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    types: [{
        type: String,
        enum: ['conference', 'meetup', 'workshop'],
        required: true
    }],
});

module.exports = mongoose.model('Event', Schema);