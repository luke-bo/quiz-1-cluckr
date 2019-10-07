const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const knex = require('knex');
const methodOverride = require("method-override");
const path = require("path");
// initialized express
const app = express();


// const clucksRouter = require("./routes/clucks");
// const rootRouter = require("./routes/root");

// setup view engine
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cookieParser());
// epxress.urlencoded is used to parse the form inputs into a "body" property in our `req` object
app.use(express.urlencoded({ extended: true }));
// for serving static assets
app.use(express.static("public"));

// root route test
app.get('/', (req,res) => {
    res.render('welcome');
});


// app.use("/clucks", clucksRouter);
// app.use("/", rootRouter);




//server spinup

const PORT = 3000;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
  console.log(`listening on ${ADDRESS}:${PORT}`);
});