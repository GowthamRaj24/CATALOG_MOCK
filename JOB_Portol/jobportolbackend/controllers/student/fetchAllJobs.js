const JobPosting = require('../models/JobPosting');

const fetchAllJobs = async (req, res) => {
    try {
        const now = new Date();
        const jobs = await JobPosting.find({ expiresAt: { $gt: now }, status: 'active' });

        if (!jobs || jobs.length === 0) {
            return res.status(404).json({ message: "No job postings found." });
        }

        res.status(200).json({ jobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = fetchAllJobs;
