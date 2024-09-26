const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    companyLogo: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    verified : {
        type : Boolean,
        default : false
    },
    blocked : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Company', companySchema);
