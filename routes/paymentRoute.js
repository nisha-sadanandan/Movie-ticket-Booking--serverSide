import express from "express";
import { paymentorder,paymentverify } from "../controller/paymentController.js"


const paymentRouter = express.Router();

paymentRouter.post("/order",paymentorder)
paymentRouter.post("/verify",paymentverify)

export default paymentRouter