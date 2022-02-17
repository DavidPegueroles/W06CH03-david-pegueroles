require("dotenv").config();
const debug = require("debug")("knowledge:root");
const connectToDatabase = require("./db");
const setupServer = require("./server");

const port = process.env.SERVER_PORT || 4000;
const mongoConnection = process.env.MONGO_STRING;

(async () => {
  try {
    await connectToDatabase(mongoConnection);
    await setupServer(port);
  } catch (error) {
    debug(error.message);
  }
})();
