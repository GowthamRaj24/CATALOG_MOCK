const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
    jobPosting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobPosting',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    resume: {
        type: String, 
    },
    coverLetter: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    appliedAt: {
        type: Date,
        default: Date.now
    },
    reviewedAt: {
        type: Date
    }
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
