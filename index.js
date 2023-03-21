
require('dotenv').config();
const express = require('express');
const db = require('./db/connect');
const cors = require('cors')

// importing routes
const fitnessRoutes = require('./routes/fitness.routes');


const app = express();
// connecting db
db();


// To parse json object
app.use(express.json());
app.use(cors())


app.get('/',(req,res) => {
    res.send('Welcome to fitness app');
})


// custom middleware
app.use(fitnessRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
})


















