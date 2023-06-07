const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers = require("./utils/helpers");

// create new store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// create express server, set port
const app = express();
const PORT = process.env.PORT || 3001;
app.use();

// configure session object with store
const sess = {
  secret: "secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// add express-session (express middleware)
app.use(session(sess));
