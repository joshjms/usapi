const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    course_code: {
        required: true,
        type: String,
    },
});

const Module = mongoose.model("Module", ModuleSchema);

module.exports = { Module }
