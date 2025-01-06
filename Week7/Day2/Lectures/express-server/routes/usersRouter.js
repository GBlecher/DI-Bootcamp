const { Router } = require("express");
const { users } = require("../config/data.js");

const router = Router();

router.get("/all", (req, res) => {
  res.json(users);
});

module.exports = {
  usersRouter: router,
};
