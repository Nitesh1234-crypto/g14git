const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        require:true
    },
    password:String
})

module.exports= mongoose.model("User",userSchema);