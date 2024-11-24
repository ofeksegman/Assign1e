const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port=process.env.PORT;
require('dotenv/config');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECT);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at on port ${port}`);
});

const postsRoute = require("./routes/postRoutes");
app.use("/posts", postsRoute);

const commentsRoute = require("./routes/commentRoutes");
app.use("/comments", commentsRoute);

