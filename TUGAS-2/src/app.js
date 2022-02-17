const express = require("express");
const app = express();
const homePage = require("../routes/indexRoute");
const router = express.Router();

// const createItems = require("../routes/createRoute");
// const editItems = require("../routes/editRoute");

// const storeItems = require("./routes/storeRoute");
// const updateItems = require("./routes/updateRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", homePage);
// app.use("/create", createItems);
// app.use("/store", storeItems);
// app.use("/edit", editItems);
// app.use("/update", updateItems);

app.listen(5000, () => { 
  console.log("server is running on port 5000...");
});

module.exports = router;