const JobPosting = require('../../models/jobPostingsSchema');

const fetchMyPostings = async (req, res) => {
    const  employerId  = req.body.Id;
    console.log(employerId);    

    try {
        const jobPostings = await JobPosting.find({ employer : employerId });

        if (!jobPostings) {
            return res.status(404).json({ message: "No job postings found." });
        }

        res.status(200).json({ jobPostings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
}

module.exports = fetchMyPostings;