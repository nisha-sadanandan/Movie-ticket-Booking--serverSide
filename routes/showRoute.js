import express from "express"
import { getAllShow,getMovieShow,getMovieShowByTheater,getShowbyid,deleteShow} from "../controller/showController.js"


const showRouter = express.Router()


showRouter.get("/get-show",getAllShow)
showRouter.get("/:title/get-show",getMovieShow)
showRouter.get("/:theatername/get-shows",getMovieShowByTheater)
showRouter.get("/:showid/getshow",getShowbyid)
showRouter.delete("/delete-show",deleteShow)



export default showRouter