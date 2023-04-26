const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  FavoriteFoods: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("person", personSchema);
