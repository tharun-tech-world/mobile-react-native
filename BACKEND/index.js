const express = require ('express');
var bodyParser = require('body-parser')
const app = express();

const mongoose = require('./database/db')
const userController = require('./controllers/userController')

//Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userController)

app.listen(3333, () =>{

    console.log("Server is running on port 3333")
})