const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const dotenv = require("dotenv");
require('dotenv').config();
dotenv.config();
require("./config/database");

const app = express();

// MIDDLEWARE///////////

// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(morgan('dev'));

// ROUTES //////////////

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});