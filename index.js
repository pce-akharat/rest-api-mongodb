const express = require('express');
const mongoose = require('mongoose');

// set up our express app
const app = express();
app.use(express.json());

// connect to mongodb
mongoose.connect('mongodb://0.0.0.0/mydb');

// initialize routes
app.use('/api',require('./routes/api'));
// home page
app.get("/", (req, res) => res.send("<h1>Build a RESTful API using MongoDB</h1>"))

// listen for requests
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening on port ${port}`));