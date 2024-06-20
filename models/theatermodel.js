import mongoose from "mongoose";


const theaterSchema = new mongoose.Schema({
   
   theatername:{
    type:String,
    required:true,

   
   },

   location:{
    type:String, 
    required:true,
  
  
   },
 

   show: [{ type: mongoose.Types.ObjectId, ref: "Show" }],

},

{timestamps:true}

)

const Theater = mongoose.model("Theater",theaterSchema)

export default Theater