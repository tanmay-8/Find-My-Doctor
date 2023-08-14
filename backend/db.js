const mongoose = require("mongoose");


const connectToMongo = async (mongoURL) => {
  mongoose.connect(
    mongoURL,
    () => {
      console.log("Connected to MongoDB");
    }
  );
};

module.exports = connectToMongo;
