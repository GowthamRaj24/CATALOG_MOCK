const JobPostingsSchema = require('../../models/jobPostingsSchema');

const fetchAllJobs = async (req, res) => {
    const { location, jobType, skillsRequired } = req.query;

    try {
        const query = {
            status: 'active',
            acceptingApplications: true,
            ...(location && { location }),
            ...(jobType && { jobType }),
            ...(skillsRequired && { skillsRequired: { $in: skillsRequired.split(',') } })
        };

        const jobs = await JobPosting.find(query);

        if (!jobs.length) {
            return res.status(404).json({ message: "No jobs found matching your criteria." });
        }

        res.status(200).json({ jobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = fetchAllJobs;
