import express from "express";
import {signup,login,getUser} from "../controller/userController.js";


const userRouter = express.Router();

userRouter.post('/signup',signup)
userRouter.post('/login',login)
userRouter.get('/get-user',getUser)



export default userRouter