// @ts-ignore
const JobPosting = require('../../models/jobPostingsSchema');

const addJobPosting = async (req, res) => {
    const { title, description, location, salaryRange, jobType, skillsRequired, experienceRequired, expiresAt } = req.body;

    const newJobPosting = new JobPosting({
        employer: req.body.user._id,
        title,
        description,
        location,
        salaryRange,
        jobType,
        skillsRequired,
        experienceRequired,
        expiresAt
    });

    try {
        await newJobPosting.save();
        res.status(201).json({ message: "Job posting created successfully!", job: newJobPosting });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create job posting." });
    }
};

module.exports = addJobPosting;
