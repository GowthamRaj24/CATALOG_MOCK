const Company = require('../../models/companiesSchema');

const verifyCompany = async (req, res) => {
    const { companyId } = req.params;
    try {
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).json({ message: "Company not found." });
        }

        company.verified = true;
        await company.save();

        res.status(200).json({ message: "Company verified successfully.", company });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = verifyCompany;
