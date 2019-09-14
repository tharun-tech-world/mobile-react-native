const {User} = require('../models/usermodel');

const authenticate = (req, res, next) =>{
    
    var token = req.header("x-auth");
    User.findUserByToken(token).then((user) => {
    
        if(!user){
            Promise.reject();
        }else{
            req.user = user;
            req.token = token;
            next();
        }
    }).catch(() => {
        res.status(401).send();
    });
}

module.exports = authenticate;


