const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/movies").then(function(){
  console.log("connected");
})

const movieschema = mongoose.Schema({
  name:String,
  rate:Number,
  des:String,
  time:String,
})

module.exports = mongoose.model("user",movieschema)