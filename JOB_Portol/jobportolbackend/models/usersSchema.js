const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
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
    role: {
        type: String,
        enum: ['job_seeker', 'employer'],
        required: true
    },
    profilePicture: {
        type: String,
    },
    phone: {
        type: String,
    },
    location: {
        type: String,
    },
    bio: {
        type: String,
    },
    resume: {
        type: String,
    },
    company: { 
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);