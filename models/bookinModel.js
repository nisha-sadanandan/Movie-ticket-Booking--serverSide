import mongoose from "mongoose";


 const bookingSchema = new mongoose.Schema({

   userid:{
      type: mongoose.Types.ObjectId, ref: "User" ,


   },

   showid:{
      type: mongoose.Types.ObjectId, ref: "Show" ,
      required:true,
   },

   
     seat:{
      type:[String],
      required:true,
   },

     status:{
      type:String,
      enum:["Reserved"],
     
     },

     totalprice:{
      type:Number
     },
     
     paymentmethod:{
         type:String,
         enum:["razorpay"],
       
     },
     expiresAt:{
      type:Date,
     },

     user:[{ type: mongoose.Types.ObjectId, ref: "User" }],

    },

    {timestamps:true}
   
   )

    const Booking = mongoose.model("Booking",bookingSchema)

    export default Booking