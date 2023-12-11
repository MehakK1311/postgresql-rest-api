const express = require('express')
const studentRoutes = require('./src/student/routes')
require('dotenv').config()

const app = express()


const port = process.env.PORT || 3001

app.get('/', (req, res) =>{
    res.send('hello')
})

app.use('/api/v1/students', studentRoutes)

app.listen(port, ()=>{console.log(`app listening on ${port}`)})