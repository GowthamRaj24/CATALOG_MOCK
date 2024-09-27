const JobPostingsSchema = require('../../models/jobPostingsSchema');

const fetchAllJobs = async (req, res) => {
    try {
        const jobs = await JobPostingsSchema.find();
        res.status(200).send(jobs);
    }
    catch (error) {
        res.status(500).send("Internal Server Error" + error);
    }
};

module.exports = fetchAllJobs;
