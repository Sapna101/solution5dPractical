const mongoose = require('mongoose');

let signupSchema = new mongoose.Schema({
  firstname : { type : String },
  lastname : { type : String},
  mobilenumber : { type : Number},
  emailId : { type : String},
  city : { type : String},
  password : { type : String}
})

module.exports = mongoose.model('registeredusers',signupSchema)
