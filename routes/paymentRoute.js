import express from "express";
import { paymentOrder,paymentVerify } from "../controller/paymentController.js"


const paymentRouter = express.Router();

paymentRouter.post("/order",paymentOrder)
paymentRouter.post("/verify",paymentVerify)

export default paymentRouter