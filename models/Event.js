const { ObjectId, Date } = require("mongoose");
const mongoose = require("mongoose");
const { User } = require("./User");

const EventSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    desc: {
        type: String,
    },
    start: {
        required: true,
        type: Date,
    },
    end: {
        required: true,
        type: Date,
    },
    user_id: {
        required: true,
        type: ObjectId,
        ref: User,
    },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = { Event }
