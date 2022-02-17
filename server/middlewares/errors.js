const debug = require("debug")("things:server:middlewares:errors");
const chalk = require("chalk");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ error: "Resource not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug(chalk.bgWhite.red("Todo me male sal"));
  res.status(500);
  res.json({ error: "Todo me male sal" });
};

module.exports = { notFoundError, generalError };
