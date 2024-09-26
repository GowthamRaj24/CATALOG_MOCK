const usersSchema = require("../../models/usersSchema");

const addUser = async (req, res) => {
    try{
        const existingUser = await usersSchema.findOne({ username: req.body.username });
        console.log(existingUser);
        if (existingUser) {
            return res.status(400).send("User with this Username already exists");
        }
        console.log("User does not exist");
        const userData = req.body;
        const user = await usersSchema.create({
            userData
        });
        await user.save();
        console.log("User Created");


        res.status(200).send();
    }
    catch(err){
        res.status(500).send("error in adding user\n" + err);
    }
}

exports.addUser = addUser;