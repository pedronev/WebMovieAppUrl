const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://user:Nevare2019z@cluster0.fggzq.mongodb.net/MoviesTable?retryWrites=true&w=majority")

app.use("/", require("./routes/movieRoute"));


app.listen(3001, function(){
    console.log("server running");
});