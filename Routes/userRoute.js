const express = require('express')
const userSchema = require("../Model/userModel")
const router = express.Router()

router.get('/users', (req, res)=>{
        userSchema.find()
        .then(user => res.json(user))
        .catch(error => res.status(500).json({
            error: error.message
        }))

})

router.post('/users', (req, res)=>{
    const newUser = new userSchema({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        phone: req.body.phone,
        job: req.body.job,

    })
    newUser.save()
    .then(user => {
    res.status(201).json(user)
    })
    .catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
})

router.put('/users', (req, res)=>{
    res.send({
        type: 'PUT'
    })
})

router.delete('/users', (req, res)=>{
    res.send({
        type: 'DELETE'
    })
})

module.exports = router