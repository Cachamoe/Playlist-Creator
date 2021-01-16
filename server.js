// Variables
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const db = require("./models");
const app = express();


app.use(logger("dev"));

// Use Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(require("./routes/playlistRoute"));
app.use(require("./routes/userAuthRoute"));

// Connect to Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/playlist",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Start Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
