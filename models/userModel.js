import mongoose from "mongoose";


const userSchema = new mongoose.Schema (
    {

        name:{
            type:String,
            required:true,
            minLength: 3,
            maxLength: 25,
        },

        email:{
            type:String,
            required:true,
            unique:true,
            minLength: 4,
            maxLength: 30,
        },

        hashpassword:{
            type:String,
            required:true,
            minLength:4,
            
        },

        booking: [{ type: mongoose.Types.ObjectId, ref: "Booking" }],
    },

    {timestamps:true}
)

const User = mongoose.model("User",userSchema)

export default User