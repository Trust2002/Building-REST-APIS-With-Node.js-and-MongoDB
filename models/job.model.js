const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    duration: {
        type: String
    }

});

module.exports = mongoose.model('Job', JobSchema);