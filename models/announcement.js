const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    pdfUrl:{
        type: String,
        required: true
    }
    // ,
    // date: {
    //     type: date,
    //     required: true,
    // }
}, {timestamps: true})

const Announcement = mongoose.model('Announcement', announcementSchema); 

module.exports = Announcement;