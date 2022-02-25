const express = require("express");
const mongoose = require("mongoose");
const app = express();
const homePage = require("./routes/indexRoute");
const router = express.Router();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/", homePage);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI), app.listen(4000, () => { 
      console.log("Server is running on port 4000...");
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();


module.exports = router;

// app.listen(4000, () => { 
//   console.log("Server is running on port 4000...");
// });