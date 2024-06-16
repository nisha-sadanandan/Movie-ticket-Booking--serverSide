import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(

    {
         title:{
            type:String,
            required:true,
         },

         image:{
            type:String,
            required:true
         },

         releasedate:{
            type:String,
            required:true
         },

         duration:{
            type:String,
            required:true
         },

         genre:{
            type:String,
            required:true
         },

         theater: [{ type: mongoose.Types.ObjectId, ref: "Theater" }],
      },
    
)

const Movie = mongoose.model("Movie",movieSchema)

export default Movie