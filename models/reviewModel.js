import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        
        
    },

    movieid:{
        type: mongoose.Types.ObjectId, ref: "Movie" ,
        required:true,
        
        
        
    },


    rating:{
        type:Number,
        minLength:1,
        maxLength:10,
        required:true,
    },

    reviewtext:{
        type:String,
        maxlength:300,
        required:true,
    },

    show: [{ type: mongoose.Types.ObjectId, ref: "Show" }],

},

{timestamps:true}
)

const Review = mongoose.model("Review",reviewSchema)

export default Review