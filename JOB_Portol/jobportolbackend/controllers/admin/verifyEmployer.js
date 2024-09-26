const User = require('../../models/usersSchema');

const verifyEmployer = async (req, res) => {
    const { employerId } = req.params;

    try {
        const employer = await User.findById(employerId);

        if (!employer) {
            return res.status(404).json({ message: "Employer not found." });
        }

        employer.verified = true;
        await employer.save();

        res.status(200).json({ message: "Employer verified successfully.", employer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = verifyEmployer;
