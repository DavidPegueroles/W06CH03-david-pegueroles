const express = require("express");
const debug = require("debug")("knowledge:server");

const app = express();

const setupServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server is ready at http://localhost:${port}/knowledge`);
      resolve();
    });

    server.on("error", (error) => {
      reject(new Error(`Error on server: ${error.message}`));
    });
  });

module.exports = setupServer;
