const mongoose = require('mongoose');

let momentSchema = new mongoose.Schema({
  title : { type : String },
  tags : { type : Array},
  imageurl : { type : String}  
})

module.exports = mongoose.model('momentlist', momentSchema)
