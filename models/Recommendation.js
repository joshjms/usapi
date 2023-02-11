const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema({
    mal_id: {
        required: true,
        type: String,
    },
    title: {
        required: true,
        type: String,
    },
    recs: {
        type: Array,
    }
});

const Recommendation = mongoose.model("Recommendation", RecommendationSchema);

module.exports = { Recommendation }
