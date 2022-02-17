const debug = require("debug")("knowledge:database");
const mongoose = require("mongoose");

const connectToDatabase = (url) => {
  mongoose.connect(url, (error) => {
    if (error) {
      debug("Couldn't connect to the database");
      return;
    }
    debug("Va bene, è stato collegato al database");
  });
};

module.exports = connectToDatabase;
