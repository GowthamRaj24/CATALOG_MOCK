const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobPostingSchema = new Schema({
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salaryRange: {
        min: Number,
        max: Number
    },
    jobType: {
        type: String,
        enum: ['full_time', 'part_time', 'contract', 'internship'],
        required: true
    },
    skillsRequired: [String],
    experienceRequired: {
        type: String,
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    status: {
        type: String,
        enum: ['active', 'closed'],
        default: 'active'
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
    }
});

module.exports = mongoose.model('JobPosting', jobPostingSchema);
