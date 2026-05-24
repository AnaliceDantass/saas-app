const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: String,
    maxUsers: Number,
    price: Number
});

module.exports = mongoose.model('Plan', planSchema);
