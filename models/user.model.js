const mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose');


const User =   new mongoose.Schema({
    userId: String,
    email: String,
    password: String,
    role:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);

