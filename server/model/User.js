const mongoose = require("mongoose");

//why import the slugify? 其实我也不知道slugify到底是啥意思，反正是为了简化url的一个库
//the id behind every single page is to ugly.And we tried to make it easier 
// to understand every meaning of the url
const userSchema = new mongoose.Schema({
  account: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  }
  
});

module.exports = mongoose.model("User", userSchema);