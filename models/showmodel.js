import mongoose from "mongoose";

const showSchema = new mongoose.Schema({


    title:{
        type:String,
        required:true,
     },

     theatername:{
      type:String,
      required:true,
      
   },

     showtime:{
        type:String,
        required:true,
     },

     date:{
        type:String,
        required:true,
     },

     price:{
      type:Number,
      required:true
     },

     theater: [{ type: mongoose.Types.ObjectId, ref: "Theater" }],

})

const Show = mongoose.model("Show",showSchema)

export default Show