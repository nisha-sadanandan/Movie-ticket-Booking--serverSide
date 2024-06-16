import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authenticateowner(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.send("Token missing").status(403);


 const decoded = jwt.verify(token, process.env.SECRET_KEY)
    
    if (
      decoded.role!== "owner" &&
      decoded.role !== "admin"
    ) {
      return res.send("not authenticated");
    }

    next();
}

export default  authenticateowner;

