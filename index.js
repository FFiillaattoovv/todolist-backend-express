const express = require('express');
const mongoose = require('mongoose');

const app = express()

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Petrov:007Database@cluster0.bydz4.mongodb.net/todolist?retryWrites=true&w=majority')
        app.listen(PORT, () => `Server started on port ${PORT}`)
    } catch (e) {
        console.error(e);
    }
};