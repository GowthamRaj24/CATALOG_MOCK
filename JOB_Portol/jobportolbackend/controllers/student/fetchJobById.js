const JobPosting = require("../../models/jobPostingsSchema");

const fetchJobById = async (req, res) => {
    const jobId = req.body.jobId;

    try {
        const job = await JobPosting.findById(jobId);

        if (!job) {
            return res.status(404).json({ message: "Job posting not found." });
        }

        res.status(200).json({ job });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
}

module.exports = fetchJobById;