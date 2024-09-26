const JobPosting = require('../../models/jobPostingsSchema');

const deleteJobPosting = async (req, res) => {
    const { jobId } = req.params;

    try {
        const job = await JobPosting.findById(jobId);

        if (!job) {
            return res.status(404).json({ message: "Job posting not found." });
        }

        if (job.employer.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "You are not authorized to delete this job posting." });
        }

        await job.remove();
        res.status(200).json({ message: "Job posting deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = deleteJobPosting;
