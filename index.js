require("dotenv").config();
const debug = require("debug")("things:root");
const chalk = require("chalk");
const connectToDatabase = require("./db");
const setupServer = require("./server");

const port = process.env.SERVER_PORT || 4000;
const mongoConnection = process.env.MONGO_STRING;

(async () => {
  try {
    await connectToDatabase(mongoConnection);
    await setupServer(port);
  } catch (error) {
    debug(chalk.bgRed.white(error.message));
  }
})();
