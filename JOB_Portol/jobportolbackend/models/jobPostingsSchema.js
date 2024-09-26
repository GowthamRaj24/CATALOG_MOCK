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
        min: { type: Number },
        max: { type: Number }
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
    acceptingApplications: {
        type: Boolean,
        default: true
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
    }
});


jobPostingSchema.methods.checkExpiration = function() {
    const now = new Date();
    if (this.expiresAt && this.expiresAt <= now) {
        this.status = 'closed';
        this.acceptingApplications = false;
    }
};

module.exports = mongoose.model('JobPosting', jobPostingSchema);
