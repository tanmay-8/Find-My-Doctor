const express = require("express");
var cors = require("cors");
const connectToMongo = require("./db");

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


// routes
app.use("/api/doctor", require("./Routes/doctor"));
app.use("/api/user", require("./Routes/user"));
app.use("/api/rating", require("./Routes/rating"));
app.use("/api/appointment", require("./Routes/appointment"));

app.get("/", (req, res) => {
  res.send("HELLO !")
});

const start = async() => {
  try{
      await connectToMongo(process.env.mongoURL);
      app.listen(port, () => {
        console.log("Listening on port " + port);
      });
  }catch(err){
    console.log(err);
  }
}

start();

