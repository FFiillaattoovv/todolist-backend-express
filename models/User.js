const mongoose = require('mongoose');
const { Types } = require("mongoose");

const User = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    todos: [{type: Types.ObjectId, ref: 'Todo'}]
});

module.exports = mongoose.model('User', User);