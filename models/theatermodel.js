import mongoose from "mongoose";


const theaterSchema = new mongoose.Schema({
   
   theatername:{
    type:String

   
   },

   location:{
    type:String
  
  
   },

   role:{
      type:String,
      enum:["owner"]
    },

    name:{
      type:String
     
    },

    email:{
      type:String,
      unique: true,
    
    },
    hashpassword:{
      type:String,
      minLength: 6,
    
    },

   show: [{ type: mongoose.Types.ObjectId, ref: "Show" }],

})

const Theater = mongoose.model("Theater",theaterSchema)

export default Theater