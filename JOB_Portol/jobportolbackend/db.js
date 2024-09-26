const mongoose = require('mongoose');
const url = "mongodb+srv://mgowthamraj9491:123000@jobportol.cx6ne.mongodb.net/";

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to the database');
    } catch (err) {
        console.log('Error connecting to the database', err);
    }
};

exports.connect = connect;