const mongoose  = require("mongoose")

const profileSchema = new mongoose.Schema({

  gender: {
    type: String,

  },
  dateOfBirth: {
    type: String,
  },

  about:{
    type: Number,
    trim:true,
  },


  constactNumber:{
    type: Number,
    trim : true,
  }

  

})

module.exports = mongoose.model("Profile" , profileSchema)