const User = require('../models/User');
const Tenant = require('../models/Tenant');

exports.addUser = async (req, res) => {
    const {name, email, password} = req.body;
    const tenantId = req.user.tenantId;

    const tenant = await Tenant.findById(tenantId);
    const currentUsers = await User.countDocuments({tenanId});

    const planLimits = tenant.plan === 'freemium' ? 3 : Infinity;
    if (currentUsers >= planLimits)
    return res.status(403).send('Limite de usuários para este plano');

    const hashed = require('bcryptjs').hashSync(password, 8);
    const newUser = await User.create({name, email, password: hashed, tenantId});
    res.status(201).json(newUser);
};
