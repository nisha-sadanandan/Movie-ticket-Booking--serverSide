import express from "express"
import { getAllShow,getMovieShow  } from "../controller/showController.js"


const showRouter = express.Router()


showRouter.get("/get-show",getAllShow)
showRouter.get("/get-movieshow/:id",getMovieShow)


export default showRouter