const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
require('./config/mongoose.config')
require('dotenv').config()
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use(
    cors({
        origin: 'http://localhost:3000', credentials:true
    }),
);

require('./routes/sgs.routes')(app)
require('./routes/user.routes')(app)

app.listen(PORT, ()=>{
    console.log('Server is up and running')
    })