import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
        
    },
     
    movieid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movie",
      
    },

    rating:{
        type:Number,
        minLength:1,
        minLength:10,
        required:true,
    },

    reviewtext:{
        type:String,
        maxlength:300
    },

    show: [{ type: mongoose.Types.ObjectId, ref: "Show" }],

},

{timestamps:true}
)

const Review = mongoose.model("Review",reviewSchema)

export default Review