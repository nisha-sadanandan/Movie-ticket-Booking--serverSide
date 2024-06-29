import express from 'express'
import { reservedSeat,getTicket, getTicketById} from '../controller/bookingController.js'

const bookingRouter = express.Router()


bookingRouter.post("/reserve-seat",reservedSeat)
bookingRouter.get("/get-ticket",getTicket)
bookingRouter.get("/get-ticket/:id",getTicketById)

export default bookingRouter