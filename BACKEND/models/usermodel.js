const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const _ = require('lodash')


const Schema =  mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        trim:true,
        required:true,
        minlength: 4

    },
    email: {
        type: String,
        unique:true,
        required: true,
        trim:true,
        minlength: 8,

    },
    confirmemail: {
        type: String,
        required: true,
        trim:true,
        minlength: 8,

    },
    password: {
        type: String,
        trim: true,
        minlength: 5,
        required: true,
    },
    tokens: [
        {
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }
    ]
        
})

//To precise the user info
UserSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    return _.pick(userObject, ["_id", "email", "name"])
}

//To generate auth token when user is being created.
UserSchema.methods.generateAuthToken = function() { 
    const user = this;
    const access = "auth";

    const token = jwt.sign({_id: user._id.toHexString(), access}, 'AAASSSDDDFFFGGGHHH').toString();

    user.tokens.push({access, token});
    
    return user.save().then(() => {
        return token; 
    })
}


//To find user by credentials
UserSchema.statics.findUserByCredentials = function(email, password){

    const User = this;
    return User.findOne({email}).then((user) =>{

        if(!user){
            Promise.reject();
        }else{
            return new Promise((resolve, reject) =>{

                bcrypt.compare(password, user.password, (err, res) => {
                    if(res){
                        resolve(user);
                    }else{
                        reject();
                    }
                })
            })
        }
    });
}


//To find user by token.
UserSchema.statics.findUserByToken = function(token){

    const User = this;
    let decoded;

    try{
        decoded = jwt.verify(token, "AAASSSDDDFFFGGGHHH");
    }catch(e){
        return Promise.reject();
    }

    return User.findOne({
        "_id": decoded._id,
        "tokens.token": token,
        "tokens.access": "auth"
    })
}

//To delete the token
UserSchema.methods.removeToken = function(token){
    const user = this;
    return user.updateOne({
        $pull:{
            tokens: {token}
        }
    });
}

//hashing password
UserSchema.pre("save", function(next) {
    const user = this;
    if(user.isModified("password")){

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                next();
            });
        }); 
    } else{
        next();
    }
}) 


const User= mongoose.model('UserDB', UserSchema)

module.exports = {User}; 
