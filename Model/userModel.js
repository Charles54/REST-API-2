const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }, 
    phone: {
        type: Number,
        required: false,
    },
    job: {
        type: String,
        required: false,
    }
})








module.exports = mongoose.model('users', userSchema)