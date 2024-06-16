import jwt from "jsonwebtoken"
import dotenv from  'dotenv'

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const  generateToken = (email)=>{
  const SECRET_KEY = process.env.SECRET_KEY;
    return jwt.sign({data:email},SECRET_KEY, { expiresIn: '1d' });
}

export const  adminToken = (user)=>{
  const SECRET_KEY = process.env.SECRET_KEY;
    return jwt.sign({data:user.id ,role:user.role},SECRET_KEY, { expiresIn: '1d' });
}


export const  ownerToken = (user)=>{
  const SECRET_KEY = process.env.SECRET_KEY;
    return jwt.sign({data:user.id,role:user.role},SECRET_KEY, { expiresIn: '1d' });
}
