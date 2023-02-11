const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const { Module } = require("./Module");
const { User } = require("./User");

const UserModuleSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: ObjectId,
        ref: User,
    },
    module_id: {
        required: true,
        type: ObjectId,
        ref: Module,
    },
});

const UserModule = mongoose.model("UserModule", UserModuleSchema);

module.exports = { UserModule }
