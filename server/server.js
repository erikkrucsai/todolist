const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./src/routes/todo.routes')
const dotenv = require('dotenv');
const mongoUrl = "mongodb+srv://krucsaierik:Seattoledo73@cluster0.cqvpu36.mongodb.net/test?retryWrites=true&w=majority"

const app = express();

mongoose.connect(mongoUrl);

app.use(express.json());
app.use(cors());
app.use('/api', todoRoutes);

app.listen(3000 , () => {
    console.log("Server is running on https://localhost:3000");
})





