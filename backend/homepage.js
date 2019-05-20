// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const HomepageSchema = new Schema({
  ptt: String,
  fb: String,
  email: String
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("homepage", HomepageSchema);
