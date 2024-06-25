import express from "express"
import { getTheater,getTheaterById} from "../controller/theaterController.js"





const theaterRouter = express.Router()
theaterRouter.get("/get-theater",getTheater)
theaterRouter.get("/get-theaterbyid/:id",getTheaterById)



export default theaterRouter