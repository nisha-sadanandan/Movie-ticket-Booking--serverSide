import mongoose from "mongoose";


const ownerSchema = new mongoose.Schema({
   

    name:{
      type:String,
      required:true,
     
    },

    email:{
      type:String,
      unique: true,
      required:true,
    
    },
     hashpassword:{
      type:String,
      minLength: 6,
      required:true,
    
    },

   theater: [{ type: mongoose.Types.ObjectId, ref: "Theater" }],

})

const Owner = mongoose.model("Owner",ownerSchema)

export default Owner