const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.json())


//IMPORT ROUTER
const shopRouter = require('./routes/shop');
app.use('/shop', shopRouter);

//ROUTER
app.get('/', (req, res) => {
    res.send('Welcome to Shop Controller homepage');
})


//CONNECTED TO DB
mongoose.connect(
    process.env.DB_CONNECTION, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to mongoDB');
    });

// APP LISTENING HERE
app.listen(5000);