import Movie from "../models/movieModel.js";
import { cloudinaryInstance } from "../config/cloudinary.js"




export const addMovie = async (req,res)=>{

    try {

      if (!req.file) {
        return res
          .status(400)
          .json({ success: false, message: "No file uploaded" });
    }
    cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
      if (err) {
        console.log(err, "error");
        return res.status(500).json({
          success: false,
          message: "Error",
        });
      }
      
      const images = result.url;
      const body = req.body;
      console.log(body, "body");

      const { title,releasedate ,duration ,genre} = req.body;
      console.log(title)


      const addMovie= new Movie({
        title,
        releasedate ,
        duration ,
        genre,
        image:images,
      });
      
      
      const newMovieAdded = await addMovie.save();
      if (!newMovieAdded) {
        return res.send("movie is not created");
      }
      return res.send(newMovieAdded);
    });

} catch (error) {
    console.log("something went wrong", error);
    res.send("failed to create movie");

    }
}


export const  getMovie = async (req,res)=>{
try {
     const movies = await Movie.find();
     res.send(movies).status(200)
} catch (error) {
          console.log("something went wrong", error);
          res.send("failed to find movie");
}
  
}


export const  getMovieById = async (req,res)=>{
      const id = req.params.id
  try {
       const movies = await Movie.findById({_id:id});
       res.send(movies).status(200)
  } catch (error) {
            console.log("something went wrong", error);
            res.send("failed to find movie");
  }
    
  }
  
  


export const updateMovie = async(req,res)=>{

  const id = req.params.id;
  console.log(id);

  const { title, image, releasedate, duration} =req.body;

  try {
    const updatedMovie = await Movie.findOneAndUpdate(

      {_id:id},{ title, image, releasedate, duration},{new:true}
    )
  
  if(!updatedMovie){
    return res.send("movie is not updated")
  }
  
  console.log(updatedMovie)
  return res.send(updatedMovie)
  
  } catch (error) {
    console.log("something went wrong", error);
    res.send("failed to updatemovie");
  }

 
}


export const deleteMovie = async(req,res)=>{

  const id = req.params.id
  console.log(id)

  const deletedMovie = await Movie.findOneAndDelete({_id:id})

  if(!deletedMovie){

    return res.send("movie is not deleted")
  }

  return res.send("movie deletion completed")
}



export  const getMovieShow = async(req,res)=>{

  const title =req.params.title
  try {
      
      const show = await Show.find({title})
      res.send(show).status(200)  
      console.log(show)   
      
  } catch (error) {

      console.log(error)
      res.send("sever error")
      
  }
}
