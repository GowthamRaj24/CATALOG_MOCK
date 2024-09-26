const JobPosting = require('../../models/jobPostingsSchema');

const updateJobPosting = async (req, res) => {
    const { jobId } = req.params;
    const { title, description, location, salaryRange, jobType, skillsRequired, experienceRequired, expiresAt } = req.body;

    try {
        const job = await JobPosting.findById(jobId);

        if (!job) {
            return res.status(404).json({ message: "Job posting not found." });
        }

        if (job.employer.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "You are not authorized to update this job posting." });
        }

        job.title = title || job.title;
        job.description = description || job.description;
        job.location = location || job.location;
        job.salaryRange = salaryRange || job.salaryRange;
        job.jobType = jobType || job.jobType;
        job.skillsRequired = skillsRequired || job.skillsRequired;
        job.experienceRequired = experienceRequired || job.experienceRequired;
        job.expiresAt = expiresAt || job.expiresAt;

        await job.save();

        res.status(200).json({ message: "Job posting updated successfully.", job });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = updateJobPosting;
