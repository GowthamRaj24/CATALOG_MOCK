const JobPosting = require('../../models/jobPostingsSchema');
const User = require('../../models/usersSchema');

const applyForJob = async (req, res) => {
    console.log(req.body)
    const jobId = req.body.jobId;

    try {
        const job = await JobPosting.findById(jobId);
        const student = await User.findById(req.body._id);
        if (job.status !== 'active') {
            return res.status(400).json({ message: "Cannot apply for this job." });
        }
        if (job.applicants.includes(req.body._id)) {
            return res.status(400).json({ message: "You have already applied for this job." });
        }

        
        student.appliedJobs.push(jobId);
        job.applicants.push(req.body._id);
        await student.save();
        await job.save();

        res.status(200).json({ message: "Application successful!" });
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = applyForJob;