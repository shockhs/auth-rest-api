const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// Import Router
const authRoute = require('./routes/auth')
const postRoute = require('./routes/test')

dotenv.config();

// MongoDB connect
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
        console.log('Connected to DB')
    });

//Middleware 
app.use(express.json())

// Route Middleware
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

app.listen(5000, () => {
    console.log('Server up and running')
})
