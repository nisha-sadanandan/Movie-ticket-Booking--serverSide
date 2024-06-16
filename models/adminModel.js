import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

  email: {
    type: String,
    unique: true,
    required: true,
  },

  name: {
    type: String,
  },


  hashpassword: {
    type: String,
    required: true,
    minLength: 6,
  },

  role:{
    type:String,
    enum:["admin"]
  }
 
},
   {timestamps:true}
);
const Admin = mongoose.model("Admin",adminSchema)

 export default Admin