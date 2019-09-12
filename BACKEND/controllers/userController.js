const express = require('express')
const router = express.Router()

const {User} = require('../models/usermodel')

router.post("/create", (req,res) => {
    //console.log(req.body);
    const userData = {
        
        email: req.body.email,
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

router.post("/login", (req,res) => {
    
})
router.delete("/logout", (req,res) => {
    
})


module.exports = router;
