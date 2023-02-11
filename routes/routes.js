const express = require("express");
const router = express.Router();

const { Manga } = require("../models/Manga");
const { Recommendation } = require("../models/Recommendation");
const mongoose = require("mongoose");

const genres = require("../data/GenreList");

router.get("/test", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    try {
        res.status(200).json({ message: "Hello World!" });
    } catch (error) {
        res.status(500).json({ mmessage: error.message });
    }
});

function formatManga(m) {
    manga_genres = [];
    for (let i = 0; i < genres.length; i++) {
        if (m[genres[i]] == "1") {
            manga_genres.push(genres[i]);
        }
    }
    return {
        _id: m["_id"],
        mal_id: m["mal_id"],
        title: m["title"],
        title_en: m["title_en"],
        image_url: m["image_url"],
        chapters: m["chapters"],
        publishing: m["publishing"],
        score: m["score"],
        scored_by: m["scored_by"],
        members: m["members"],
        favorites: m["favorites"],
        genres: manga_genres,
    };
}

router.get("/rec", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    try {
        const recs = await Recommendation.findOne({ mal_id: req.query.id });
        const rec_list = [...recs["recs"]];
        const rec = rec_list[Math.floor(Math.random() * 20) + 1];
        const manga = await Manga.findOne({ mal_id: rec });
        const data = formatManga(manga);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/manga", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    try {
        const manga = await Manga.find({
            $or: [
                {
                    title: {
                        $regex:
                            "^" +
                            req.query.title.replace(
                                /[-\/\\^$*+?.()|[\]{}]/g,
                                "\\$&"
                            ),
                        $options: "i",
                    },
                },
                {
                    title_en: {
                        $regex:
                            "^" +
                            req.query.title.replace(
                                /[-\/\\^$*+?.()|[\]{}]/g,
                                "\\$&"
                            ),
                        $options: "i",
                    },
                },
            ],
        }).limit(5);
        const data = manga.map((e) => formatManga(e));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// function handleError(err, req, res, next) {
//     const output = {
//         error: {
//             name: err.name,
//             message: err.message,
//             text: err.toString(),
//         },
//     };
//     const statusCode = err.status || 500;
//     res.status(statusCode).json(output);
// }

// router.use([handleError]);

module.exports = router;
