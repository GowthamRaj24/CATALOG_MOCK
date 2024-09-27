const JobPosting = require('../../models/jobPostingsSchema');


const applyForJob = async (req, res) => {
    const { jobId } = req.body.jobId;

    try {
        const job = await JobPosting.findById(jobId);

        if (!job || job.status !== 'active' || !job.acceptingApplications) {
            return res.status(400).json({ message: "Cannot apply for this job." });
        }
        if (job.applicants.includes(req.user._id)) {
            return res.status(400).json({ message: "You have already applied for this job." });
        }

        job.applicants.push(req.user._id);
        await job.save();

        res.status(200).json({ message: "Application successful!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = applyForJob;