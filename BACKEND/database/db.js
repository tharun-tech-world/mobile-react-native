const mongoose = require('mongoose');



const db_url= "mongodb+srv://tharun:reactnative@reactnativedb-2obha.mongodb.net/test?retryWrites=true&w=majority";
 
mongoose.connect(db_url, { useUnifiedTopology: true },
    () => console.log('Connected to React native Mongo DB'));


module.exports = {mongoose};