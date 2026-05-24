const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.login = async (req, res) => {
    const{email, password} = req.body;
    const user = await User.findOne({email});
    if (!user || !bcrypt.compareSync(password, user.password))
        return res.status(401).send('Credenciais inválidas');

    const token = jwt.sign(
        { userId: user._id, tenantId: user.tenantId},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    );

    res.json({token});
};

exports.register = async (req, res) => {
    const {name, email, passowrd, tenantId} = req.body;
    const hashed = bcrypt.hashSync(passowrd, 8);
    const user = await User.create({name, email, password: hashed, tenanId});
    res.status(201).json(user);
};

