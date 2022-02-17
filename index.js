require("dotenv").config();
const debug = require("debug")("knowledge:root");
const setupServer = require("./server");

const port = process.env.SERVER_PORT || 5173;

(async () => {
  try {
    await setupServer(port);
  } catch (error) {
    debug(error.message);
  }
})();
