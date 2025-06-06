const { User } = require('../models/User');
const bcrypt = require('bcrypt');

//TODO set identity prop name based on exam description
const identityName = 'email';

async function register(identity, password) {
    const existing = await User.find({ [identityName]: identity } );

    if (existing) {
        throw new Error(`This ${identityName} is already in use`);
    };

    const user = new User({
        [identityName]: identity,
        password: await bcrypt.hash(password, 10)
    });

    await user.save();

    return user;
};

async function login(identity, password) {
    
}

module.exports = {
    register,
}