const mongoose = required('mongoose');

const Schema= new mongoose.Schema({
    taskId:{
        type: String,
        required: true,
        unique: true,
    },
    staffId:{
        type: String,   
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        required: true
    },
    assignedAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    finishedAt: {
        type: Date,
        default: null,
        required: false
    }
});

module.exports = mongoose.model('TasksStaff', Schema);