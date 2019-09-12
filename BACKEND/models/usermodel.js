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

UserSchema.methods.generateAuthToken = function() { 
    const user = this;
    const access = "auth";

    const token = jwt.sign({_id: user._id.toHexString(), access}, 'AAASSSDDDFFFGGGHHH').toString();

    user.tokens.push({access, token});
    
    return user.save().then(() => {
        return token; 
    })
}


const User= mongoose.model('UserDB', UserSchema)

module.exports = {User}; 
