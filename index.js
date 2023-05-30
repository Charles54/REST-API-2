const express = require('express')
const mongoose = require('mongoose')

const app = express()
const userRouter = require('./Routes/userRoute')
const port = 9000;


mongoose.connect('mongodb+srv://princendu:test123@restapi.oyobfju.mongodb.net/')
const db = mongoose.connection
db.on('error', error =>console.log(error))
db.once('open', ()=> console.log('db connected successfully'))

app.use(express.json())
app.use('/api', userRouter)
app.listen(port, ()=>{
console.log('Server running on port 9000')
})