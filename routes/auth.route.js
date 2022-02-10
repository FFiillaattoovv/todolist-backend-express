const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.post('/registration', async (req, res) => {
    try {
        const { email, password } = req.body;
        const isUsed = await User.findOne({ email });

        if (isUsed) {
            return res.status(300).json({ message: 'This email is already taken, please try another one.' });
        }

        const user = new User({
            email, password
        });

        await user.save((err) => {
            if (err) return console.error(err);
            console.log("Document inserted successfully!");
        });

        res.status(201).json({ message: 'User created!' });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;