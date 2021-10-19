const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        fullname:{
            type: String,
            require: true,
        },
        email:{
            type: String,
            require: true,
        },
        phone:{
            type: String,
            require: true,
        },
        password:{
            type: String,
            
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);