const usersSchema = require("../../models/usersSchema");

const addUser = async (req, res) => {
    try {
        const { email, username, name, password, role, profilePicture, phone, location, bio, resume, company } = req.body;

        // Check if user with the same email already exists
        const existingUser = await usersSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Check if user with the same username already exists
        if (username) {
            const existingUsername = await usersSchema.findOne({ username });
            if (existingUsername) {
                return res.status(400).json({ message: "User with this username already exists" });
            }
        }

        const user = await usersSchema.create({
            username,
            name,
            email,
            password, 
            role,
            profilePicture,
            phone,
            location,
            bio,
            resume,
            company
        });
        await user.save();

        res.status(201).json({ 
            message: "User created successfully",
            user: {
                username: user.username,
                name: user.name,
                email: user.email,
                role: user.role,
                profilePicture: user.profilePicture,
                phone: user.phone,
                location: user.location,
                bio: user.bio,
                company: user.company
            }
        });

    } catch (err) {
        console.error("Error in adding user:", err);
        if (err.code === 11000) {
            return res.status(400).json({ message: "Duplicate key error: Email or username already exists" });
        }
        res.status(500).send("An error occurred while adding the user");
    }
};

exports.addUser = addUser;
