const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be filled!"]
  },
  price: {
    type: Number,
    required: [true, "Price must be filled!"],
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  weight: {
    type: Number,
    required: [true, "Weight must be filled!"],
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  stock: {
    type: Number,
    required: [true, "stock must be filled!"],
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  catories_id: {
    type: Number
  },
  created_at: {
    type: Number
  },
  update_at: {
    type: Number
  }
});

module.exports = mongoose.model("Task", TaskSchema);