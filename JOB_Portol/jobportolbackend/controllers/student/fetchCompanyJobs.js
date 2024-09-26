const Company = require('../models/CompaniesSchema');
const JobPosting = require('../models/JobPostingsSchema');

const fetchCompanyJobs = async (req, res) => {
    try {
        const { companyId } = req.params;

        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({ message: "Company not found." });
        }

        const jobs = await JobPosting.find({ company: companyId });

        if (!jobs || jobs.length === 0) {
            return res.status(404).json({ message: "No job postings found for this company." });
        }

        res.status(200).json({ jobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = {
    fetchCompanyJobs
};
