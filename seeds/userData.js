const { User } = require("../models");

const userData = [
  {
    username: "TechExplorer23",
    password: "Password123!",
  },
  {
    username: "CodeNinjaX",
    password: "Password123!",
  },
  {
    username: "GeekGuru99",
    password: "Password123!",
  },
  {
    username: "ByteMaster5000",
    password: "Password123!",
  },
  {
    username: "DigitalDreamer42",
    password: "Password123!",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
