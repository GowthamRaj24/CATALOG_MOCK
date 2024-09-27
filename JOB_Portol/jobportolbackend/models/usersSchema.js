const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        unique: true,
        
    },
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['job_seeker', 'employer'],
        default: 'job_seeker'
    },
    profilePicture: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    resume: {
        type: String,
        default: ''
    },
    company: { 
        type: String,
        default: ''
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    appliedJobs : {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('User', usersSchema);
