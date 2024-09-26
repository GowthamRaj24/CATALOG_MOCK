const JobPosting = require('../../models/JobPosting');

const fetchCompanyJobs = async (req, res) => {
    try {
        const jobs = await JobPosting.find({ employer: req.user._id });

        if (!jobs.length) {
            return res.status(404).json({ message: "No job postings found for this company." });
        }

        res.status(200).json({ jobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = fetchCompanyJobs;
