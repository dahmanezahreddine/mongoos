const express = require("express");
const router = require("./routes/personroute");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/person")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/", router);
app.listen(port);
