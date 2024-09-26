const Company = require('../../models/companiesSchema');

const addCompany = async (req, res) => {
    const { name, location, description } = req.body;

    const newCompany = new Company({ name, location, description });

    try {
        await newCompany.save();
        res.status(201).json({ message: "Company added successfully!", company: newCompany });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add company." });
    }
};

module.exports = addCompany;
