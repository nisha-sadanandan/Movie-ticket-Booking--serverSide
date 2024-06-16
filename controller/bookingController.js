import Booking from '../models/bookinModel.js'
import Show from "../models/showmodel.js"
import razorpayInstance from "../config/payment.js";
import Razorpay from "razorpay"







export const getTicket = async(req,res)=>{
           
   const ticket = await Booking.find();
   res.send(ticket).status(200)
  }
  


        export const getTicketById = async(req,res)=>{
           try {
            const id = req.params.id
         const ticket = await Booking.findById({_id:id});
         res.send(ticket).status(200)
            
           } catch (error) {     
            return console.log("there is something wrong")
           }
          
        }



        export const reservedSeat = async (req,res)=>{
         const reservationTimeout = 10;
         const {showid,seat} = req.body

         try {

            const show = await Show.findById(showid)
            if(!show){
               return res.send("show not found")
            }
   
              
           const unavailableSeat = await Booking.find({showid,seat})

           if(unavailableSeat.length>0){ 
            const unavailableSeatNumber = unavailableSeat.map(booking=>booking.seat)
            return res.send(`${unavailableSeatNumber} is  already booked `)
         }
        
          const booking = new Booking({
            showid,
            seat,
           status:"Reserved",
           totalprice:(show.price * seat.length),
           expiresAt:Date.now() + reservationTimeout * 60* 1000,
          })
           
          await booking.save()
          res.send(`seat reserved successfully! please complete your purchase withnin ${reservationTimeout} minutes`)
            
         } catch (error) {
            console.log(error)
            res.send("server error")
         }
        }



         export const purchaseTicket =async(req,res)=>{
             
          const { showid, seat, paymentmethod } = req.body;
        
        
          try {
            
            const existingBooking = await Booking.findOne({  show: showid, seat: { $all: seat}, status: 'Reserved' });
            if (!existingBooking) {
              return res.status(400).json({ message: 'Seats not reserved or reservation expired' });
            }
        
            if (existingBooking.expiresAt < Date.now()) {
              await Booking.deleteOne({ _id: existingBooking._id }); 
              return res.status(400).json({ message: 'Reservation expired. Please select seats again' });
            }
        
          
            if (paymentmethod !== 'razorpay') {
              return res.status(400).json({ message: 'Unsupported payment method' });
            }
        
            const options = {
              amount: existingBooking.totalprice,
              currency: 'INR',
              receipt: `booking_${existingBooking._id}`, 
              payment_capture: 1, 
            };
        
            try {
              const order = await razorpayInstance.orders.create(options);
        
              existingBooking.razorpayOrderId = order.id;
              await existingBooking.save();
        
              res.send({ message: 'Order created successfully!', order }).status(201)
            } catch (error) {
              console.log(error)
              res.send("order creation failed")
        }

      } catch (error) {
        console.log(error)
        res.send("server error")
  }
      }


        