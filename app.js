const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const esg = require('express-swagger-generator')
const cors = require('cors')

// swagger config
const defaultOptions = require('./swagger.json')
const options = Object.assign(defaultOptions, { basedir: __dirname }) // app absolute path

const { Store } = require("./routes");

var app = express();
app.use(cors());
const expressSwagger = esg(app)
expressSwagger(options)


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/store", Store);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    url: req.originalUrl,
  });
});

module.exports = app;
