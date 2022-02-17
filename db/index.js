const debug = require("debug")("things:database");
const mongoose = require("mongoose");

const connectToDatabase = (url) =>
  new Promise((resolve, reject) => {
    mongoose.connect(url, (error) => {
      if (error) {
        reject(new Error("Couldn't connect to the database"));
        return;
      }
      debug("Va bene, è stato collegato al database");
      resolve();
    });
  });

module.exports = connectToDatabase;
