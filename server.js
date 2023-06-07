const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers = require("./utils/helpers");

// import db connection
const sequelize = require("./config/connection");

// create express server, set port
const app = express();
const PORT = process.env.PORT || 3001;
app.use();
