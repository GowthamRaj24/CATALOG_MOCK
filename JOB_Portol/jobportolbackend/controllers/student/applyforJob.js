const JobPosting = require('../models/JobPostingsSchema');
const JobApplication = require('../models/JobApplicationsSchema');
const User = require('../models/User');

const applyForJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const { coverLetter, resume } = req.body;
        const applicantId = req.user._id;

        const jobPosting = await JobPosting.findById(jobId);
        if (!jobPosting) {
            return res.status(404).json({ message: "Job posting not found." });
        }

        const existingApplication = await JobApplication.findOne({
            jobPosting: jobId,
            applicant: applicantId
        });

        if (existingApplication) {
            return res.status(400).json({ message: "You have already applied for this job." });
        }

        const user = await User.findById(applicantId);
        const resumeToUse = resume || user.resume;

        if (!resumeToUse) {
            return res.status(400).json({ message: "Please provide a resume." });
        }

        const newApplication = new JobApplication({
            jobPosting: jobId,
            applicant: applicantId,
            resume: resumeToUse,
            coverLetter: coverLetter || '',
        });

        await newApplication.save();

        jobPosting.applicants.push(applicantId);
        await jobPosting.save();

        res.status(201).json({ message: "Application submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

exports.applyForJob = applyForJob;