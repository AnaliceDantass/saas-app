const express = require ('express');
const Tenant = require('../models/Tenant');
const router = express.Router();

router.post('/', async (req,res) => {
    const {name, plan} = req.body;
    const tenant = await Tenant.create({name, plan});
    res.status(201).json(tenant);
});

module.exports = router;
