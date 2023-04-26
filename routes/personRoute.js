const express = require("express");
const router = express.Router();
const person = require("../models/personmodel");

//Create Many Records with model.create
router.post("/add", (req, res) => {
  person
    .create(req.body)
    .then(() => res.json("Person created"))
    .catch((err) => console.log(err));
});

//Use model.find
router.get("/", (req, res) => {
  person
    .find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//Use model.findOne
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  person
    .findOne({ _id: userId })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//Using model.findOneAndUpdate()
router.put("/update/:userId", (req, res) => {
  const userId = req.params.userId;
  person
    .updateOne({ _id: userId }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//Delete Many Documents with model.remove()
router.delete("/delete/:userId", (req, res) => {
  const userId = req.params.userId;
  person
    .deleteOne({ _id: userId })
    .then(() => res.json("user deleted"))
    .catch((err) => console.log(err));
});
router.get("/chain/chain", (req, res) => {
  person
    .find()
    .sort({ Name: 1 })
    .limit(3)
    .select("-__v")
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
