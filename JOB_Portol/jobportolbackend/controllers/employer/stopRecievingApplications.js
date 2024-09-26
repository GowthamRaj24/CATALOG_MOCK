const JobPosting = require('../../models/JobPosting');

const stopReceivingApplicants = async (req, res) => {
    const { jobId } = req.params;

    try {
        const job = await JobPosting.findById(jobId);

        if (!job) {
            return res.status(404).json({ message: "Job posting not found." });
        }

        job.acceptingApplications = false;
        await job.save();

        res.status(200).json({ message: "Stopped receiving new applicants.", job });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = stopReceivingApplicants;
