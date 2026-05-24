const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
    name: String,
    plan: String
});

module.exports = mongoose.model('Tenant', tenantSchema); 
