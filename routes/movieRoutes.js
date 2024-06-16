import express from "express"
import {addMovie,getMovie,updateMovie,deleteMovie, getMovieById} from "../controller/movieController.js"
import upload from  "../middleware/upload.js"
import { addReview,getReviewOfMovie} from "../controller/reviewController.js";




const movieRouter = express.Router();


movieRouter.post("/add-movie",upload.single("image"),addMovie)

movieRouter.get("/get-movie",getMovie)

movieRouter.get("/get-moviebyid/:id", getMovieById)

movieRouter.put("/update-movie/:id",updateMovie)

movieRouter.delete("/delete-movie/:id",deleteMovie)

movieRouter.post("/add-review",addReview)

movieRouter.get("/get-review/:id",getReviewOfMovie)

export default  movieRouter