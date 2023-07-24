const mongoose = require("mongoose");

const mongoURL = "mongodb://0.0.0.0:27017/HealthCare";

const connectToMongo = async () => {
  mongoose.connect(
    mongoURL,
    () => {
      console.log("Connected to MongoDB");
    }
  );
};

module.exports = connectToMongo;
