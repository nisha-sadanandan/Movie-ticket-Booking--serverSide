import express from "express"
import { addTheater,addShowByOwner, ownerSignup,ownerLogin } from "../controller/ownerController.js"




const ownerRouter = express.Router()
ownerRouter.post("/signup", ownerSignup)
ownerRouter.post("/login",ownerLogin)
ownerRouter.post("/add-theater",addTheater)
ownerRouter.post("/add-show",addShowByOwner)

export default ownerRouter