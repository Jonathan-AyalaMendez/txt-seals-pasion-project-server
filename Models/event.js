
const mongoose = require('mongoose');

const Event = new mongoose.Schema({
    title: String,
    author: String,
    content: String
}, { timestamps: true });

const eventModel = mongoose.model('event-seals', Event);
