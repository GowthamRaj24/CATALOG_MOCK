const JobPosting = require('../../models/JobPosting');

const fetchApplicants = async (req, res) => {
    const { jobId } = req.params;

    try {
        const job = await JobPosting.findById(jobId).populate('applicants');

        if (!job) {
            return res.status(404).json({ message: "Job posting not found." });
        }

        res.status(200).json({ applicants: job.applicants });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = fetchApplicants;
