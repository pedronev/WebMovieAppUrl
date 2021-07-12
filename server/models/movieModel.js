
const mongoose = require ("mongoose");

const movieSchema = {
date: String,
movie: String,
seat: Number,
timings: String
};

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;