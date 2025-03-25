const User = require('../models/userModel')

exports.createUser = async(req,res) => {
    const { email, password } = req.body;
    try {
        const user = new User({
            email,
            password
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};
