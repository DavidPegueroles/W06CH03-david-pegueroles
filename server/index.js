const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("things:server");
const chalk = require("chalk");
const { generalError, notFoundError } = require("./middlewares/errors");
const routerThing = require("./routers/thingsRouter");

const app = express();

const setupServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server is ready at http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      reject(new Error(`Error on server: ${error.message}`));
    });
  });

app.use(morgan("dev"));

app.use((req, res, next) => {
  debug(chalk.bgBlack.magenta(`A request has arrived to ${req.url}`));
  next();
});

app.use(express.json());

app.use("/", routerThing);

app.use(notFoundError);
app.use(generalError);

// app.use(express.json());

// app.use("/things", routerThing);

// app.use(notFoundError);
// app.use(generalError);

module.exports = setupServer;
