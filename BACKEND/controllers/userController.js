const express = require('express')
const router = express.Router()

const {User} = require('../models/usermodel')
const authenticate = require('../middewares/authenticate')

router.post("/create", (req,res) => {
    //console.log(req.body);
    const userData = {
        email: req.body.email,
        confirmemail: req.body.confirmemail,
        password: req.body.password,
        name: req.body.name,
    }
    const user = new User(userData);
    user.save().then((user) => {
        if(user){

            return user.generateAuthToken();
        }
        else{
            res.sendStatus(400);
        }
    }).then((token) => {
        res.header({"x-auth": token}).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
 
});

router.get("/user", authenticate, (req,res) =>{
 
        res.send(req.user);

});

router.post("/login", (req,res) => {

    User.findUserByCredentials(req.body.email, req.body.password).then((user) => {
        user.generateAuthToken().then((token) => {
            res.header({"x-auth": token}).send(user);
        });
    }); 
});

router.delete("/logout",authenticate, (req,res) => {

    req.user.removeToken(req.token).then(() =>{
        res.status(200).send("User Logged Out  !");

    }).catch(()=>{
        res.status(401).send();
    });
    
});

module.exports = router;
