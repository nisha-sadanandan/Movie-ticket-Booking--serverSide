import express from 'express'
import {adminSignup,overview,addShowByAdmin,adminLogin} from '../controller/adminController.js'


const adminRouter = express.Router()



adminRouter.post("/signup",adminSignup)
adminRouter.post("/login",adminLogin)
adminRouter.get("/get-overview",overview )
adminRouter.post("/add-moviebyadmin",addShowByAdmin )

export default adminRouter