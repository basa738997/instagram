const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
       avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"

       },
       username:String,
       email:String,
       password:String

})

const UserCollection = mongoose.model("user", userschema);

module.exports = UserCollection;