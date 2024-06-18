import express from 'express'
import cors from'cors'
import cookieParser from 'cookie-parser'
import userRouter from '../routes/userRoutes.js'
import { connect } from '../config/db.js'
import  movieRouter from '../routes/movieRoutes.js'
import bookingRouter from '../routes/bookingRoutes.js'
import theaterRouter from '../routes/theaterRoutes.js'
import adminRouter from '../routes/adminRoute.js'
import showRouter from '../routes/showRoute.js'
import paymentRouter from "../routes/paymentRoute.js"
import ownerRouter from '../routes/ownerRoute.js'



const app = express();

const allowedOrigin = ['https://showtime-20204.netlify.app','http://localhost:3000']


const corsOptions = {
  origin: allowedOrigin,
  credentials: true, 
};

app.use(cors(corsOptions)); 

// var whitelist = ['http://localhost:5173', 'https://showtime-20204.netlify.app']

// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   credentials: true,
// }



app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/users",userRouter)
app.use("/api/v1/movie",movieRouter)
app.use("/api/v1/booking",bookingRouter)
app.use("/api/v1/theater",theaterRouter)
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/show",showRouter)
app.use("/api/v1/payment",paymentRouter)
app.use("/api/v1/owner",ownerRouter)
const port = 3000;
connect();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})