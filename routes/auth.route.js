const { Router } = require('express');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const router = Router();

router.post('/registration', [
    check('email', 'Incorrect email!').isEmail(),
    check('password', 'Incorrect password! Min 6!').isLength({ min: 6 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during registration.'
            });
        }

        const { email, password } = req.body;
        const isUsed = await User.findOne({ email });

        if (isUsed) {
            return res.status(300).json({ message: 'This email is already taken, please try another one.' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            email, password: hashedPassword
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