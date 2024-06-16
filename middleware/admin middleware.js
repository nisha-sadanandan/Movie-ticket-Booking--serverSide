import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const authenticateAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.send({ message: "token missing" }).status(401)

  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  if (decoded.role === "admin") {
    res.status(200);
    next();
  } else {
    res.send({ message: "Access denied!" }).status(400);
  }
};

export default authenticateAdmin;