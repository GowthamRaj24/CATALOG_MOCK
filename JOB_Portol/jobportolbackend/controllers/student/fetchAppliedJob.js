const JobPosting = require('../../models/JobPosting');

const fetchAppliedJobs = async (req, res) => {
    try {
        const jobs = await JobPosting.find({ applicants: req.user._id });

        if (!jobs.length) {
            return res.status(404).json({ message: "You have not applied for any jobs." });
        }

        res.status(200).json({ jobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = fetchAppliedJobs;
