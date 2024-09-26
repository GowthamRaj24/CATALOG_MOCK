const Company = require('../models/CompaniesSchema');
const Employee = require('../models/usersSchema');

const fetchCompanyEmployees = async (req, res) => {
    try {
        const { companyId } = req.params;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({ message: "Company not found." });
        }

        const employees = await Employee.find({ company: companyId });

        if (!employees || employees.length === 0) {
            return res.status(404).json({ message: "No employees found for this company." });
        }

        res.status(200).json({ employees });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = fetchCompanyEmployees;
