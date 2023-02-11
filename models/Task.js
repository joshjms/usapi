const { ObjectId, Date } = require("mongoose");
const mongoose = require("mongoose");
const { User } = require("./User");

const TaskSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    user_id: {
        required: true,
        type: ObjectId,
        ref: User,
    },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task }
