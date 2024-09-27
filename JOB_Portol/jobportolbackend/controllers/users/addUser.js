const usersSchema = require("../../models/usersSchema");

const addUser = async (req, res) => {
    try {
        const existingUser = await usersSchema.findOne({ email: req.body.email });
        console.log(existingUser);
        if (existingUser) {
            return res.status(400).send("User with this Email already exists");
        }
        console.log("User does not exist");
        const user = await usersSchema.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            profilePicture: req.body.profilePicture,
            phone: req.body.phone,
            location: req.body.location,
            bio: req.body.bio,
            resume: req.body.resume,
            company: req.body.company
        });
        
        await user.save();
        console.log("User Created");

        res.status(200).send();
    } catch (err) {
        res.status(500).send("error in adding user\n" + err);
    }
}

exports.addUser = addUser;