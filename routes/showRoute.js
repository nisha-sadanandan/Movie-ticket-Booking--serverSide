import express from "express"
import { getAllShow,getMovieShow} from "../controller/showController.js"


const showRouter = express.Router()


showRouter.get("/get-show",getAllShow)
showRouter.get("/:title/get-show",getMovieShow)


export default showRouter