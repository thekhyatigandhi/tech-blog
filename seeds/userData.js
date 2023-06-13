const { User } = require("../models");

const userData = [
  {
    username: "computerCAT",
    password: "Password123!",
  },
  {
    username: "glitzandglitch",
    password: "Password123!",
  },
  {
    username: "babymouse",
    password: "Password123!",
  },
  {
    username: "keyboarder",
    password: "Password123!",
  },
  {
    username: "typeman",
    password: "Password123!",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
