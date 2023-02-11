const mongoose = require("mongoose");

const MangaSchema = new mongoose.Schema({
    mal_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    title_en: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    chapters: {
        type: Number,
        required: true,
    },
    publishing: {
        type: String,
        required: true,
    },
    published_from: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    scored_by: {
        type: Number,
        required: true,
    },
    members: {
        type: Number,
        required: true,
    },
    favorites: {
        type: Number,
        required: true,
    },
    Action: {
        type: String,
        required: true,
    },
    Adventure: {
        type: String,
        required: true,
    },
    AvantGarde: {
        type: String,
        required: true,
    },
    "Award Winning": {
        type: String,
        required: true,
    },
    "Boys Love": {
        type: String,
        required: true,
    },
    Comedy: {
        type: String,
        required: true,
    },
    Drama: {
        type: String,
        required: true,
    },
    Fantasy: {
        type: String,
        required: true,
    },
    "Girls Love": {
        type: String,
        required: true,
    },
    Gourmet: {
        type: String,
        required: true,
    },
    Horror: {
        type: String,
        required: true,
    },
    Mystery: {
        type: String,
        required: true,
    },
    Romance: {
        type: String,
        required: true,
    },
    "Sci-Fi": {
        type: String,
        required: true,
    },
    "Slice of Life": {
        type: String,
        required: true,
    },
    Sports: {
        type: String,
        required: true,
    },
    Supernatural: {
        type: String,
        required: true,
    },
    Suspense: {
        type: String,
        required: true,
    },
    Ecchi: {
        type: String,
        required: true,
    },
    Erotica: {
        type: String,
        required: true,
    },
    Hentai: {
        type: String,
        required: true,
    },
    "Adult Cast": {
        type: String,
        required: true,
    },
    Anthropomorphic: {
        type: String,
        required: true,
    },
    CGDCT: {
        type: String,
        required: true,
    },
    Childcare: {
        type: String,
        required: true,
    },
    "Combat Sports": {
        type: String,
        required: true,
    },
    Crossdressing: {
        type: String,
        required: true,
    },
    Delinquents: {
        type: String,
        required: true,
    },
    Detective: {
        type: String,
        required: true,
    },
    Educational: {
        type: String,
        required: true,
    },
    "Gag Humor": {
        type: String,
        required: true,
    },
    Gore: {
        type: String,
        required: true,
    },
    Harem: {
        type: String,
        required: true,
    },
    "High Stakes Game": {
        type: String,
        required: true,
    },
    Historical: {
        type: String,
        required: true,
    },
    "Idols (Female)": {
        type: String,
        required: true,
    },
    "Idols (Male)": {
        type: String,
        required: true,
    },
    Isekai: {
        type: String,
        required: true,
    },
    Iyashikei: {
        type: String,
        required: true,
    },
    "Love Polygon": {
        type: String,
        required: true,
    },
    "Magical Sex Shift": {
        type: String,
        required: true,
    },
    "Mahou Shoujo": {
        type: String,
        required: true,
    },
    "Martial Arts": {
        type: String,
        required: true,
    },
    Mecha: {
        type: String,
        required: true,
    },
    Medical: {
        type: String,
        required: true,
    },
    Memoir: {
        type: String,
        required: true,
    },
    Military: {
        type: String,
        required: true,
    },
    Music: {
        type: String,
        required: true,
    },
    Mythology: {
        type: String,
        required: true,
    },
    "Organized Crime": {
        type: String,
        required: true,
    },
    "Otaku Culture": {
        type: String,
        required: true,
    },
    Parody: {
        type: String,
        required: true,
    },
    "Performing Arts": {
        type: String,
        required: true,
    },
    Pets: {
        type: String,
        required: true,
    },
    Psychological: {
        type: String,
        required: true,
    },
    Racing: {
        type: String,
        required: true,
    },
    Reincarnation: {
        type: String,
        required: true,
    },
    "Reverse Harem": {
        type: String,
        required: true,
    },
    "Romantic Subtext": {
        type: String,
        required: true,
    },
    Samurai: {
        type: String,
        required: true,
    },
    School: {
        type: String,
        required: true,
    },
    Showbiz: {
        type: String,
        required: true,
    },
    Space: {
        type: String,
        required: true,
    },
    "Strategy Game": {
        type: String,
        required: true,
    },
    "Super Power": {
        type: String,
        required: true,
    },
    Survival: {
        type: String,
        required: true,
    },
    "Team Sports": {
        type: String,
        required: true,
    },
    "Time Travel": {
        type: String,
        required: true,
    },
    Vampire: {
        type: String,
        required: true,
    },
    "Video Game": {
        type: String,
        required: true,
    },
    Villainess: {
        type: String,
        required: true,
    },
    "Visual Arts": {
        type: String,
        required: true,
    },
    Workplace: {
        type: String,
        required: true,
    },
    Josei: {
        type: String,
        required: true,
    },
    Kids: {
        type: String,
        required: true,
    },
    Seinen: {
        type: String,
        required: true,
    },
    Shoujo: {
        type: String,
        required: true,
    },
    Shounen: {
        type: String,
        required: true,
    },
});

const Manga = mongoose.model("Manga", MangaSchema);

module.exports = { Manga };
