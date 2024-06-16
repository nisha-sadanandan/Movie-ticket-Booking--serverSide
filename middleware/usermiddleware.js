import jwt from "jsonwebtoken"
import dotenv from "dotenv"
   
dotenv.config();

function authuser(req, res, next) {
  const token = req.cookies.token
  if (!token) return res.send({ error: 'token missing' }).status(401);
  try {
   const decoded = jwt.verify(token, process.env.SECRET_KEY);
   req.userId = decoded.userId;
   next();
   } catch (error) {
   res.json({ error: 'Access denied' }).status(401);
   }
   };
  
  export default authuser;