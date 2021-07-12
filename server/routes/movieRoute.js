const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel");


router.route("/create").post((req,res) => {
    const date = req.body.date;
    const movie = req.body.movie;
    const seat = req.body.seat;
    const timings = req.body.timings;
    const newMovie = new Movie([
        date,
        movie,
        seat,
        timings
    ]);

    newMovie.save();
});

module.exports = router;