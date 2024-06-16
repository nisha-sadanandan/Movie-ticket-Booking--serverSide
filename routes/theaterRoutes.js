import express from "express"
import { addTheater,getTheater,getTheaterById,addShowByOwner, ownerSignup,ownerLogin } from "../controller/theaterController.js"




const theaterRouter = express.Router()
theaterRouter.post("/owner-signup", ownerSignup)
theaterRouter.post("/owner-login",ownerLogin)
theaterRouter.post("/add-theater",addTheater)
theaterRouter.get("/get-theater",getTheater)
theaterRouter.get("/get-theaterbyid/:id",getTheaterById)
theaterRouter.post("/add-show/:id",addShowByOwner)

export default theaterRouter