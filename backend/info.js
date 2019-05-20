const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating a schema, sort of like working with an ORM
const InfoSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  phone: {
    type: String
  },
  personId: {
    type: String
  },
  birth: {
    type: String
  },
  school: {
    type: String
  },
  foodPrefer: {
    type: String
  }
});

// Creating a table within database with the defined schema
const Info = mongoose.model("info", InfoSchema);

// Exporting table for querying and mutating
module.exports = Info;
