import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import {generateToken} from '../utils/generateToken.js'


export const signup = async (req, res) =>{

    try {
        
          const {name,email,password} = req.body;
          console.log(email)

          const userExist = await User.findOne({ email}); 

          if (userExist) {
            return res.send("User is already exist");
          }

          const saltRounds = 10;
          const hashpassword = await bcrypt.hash(password,saltRounds)

          const newUser = new User({
            name,
            email,
            hashpassword
          });

          const newUserCreated = await newUser.save()

          if(!newUserCreated){
            return res.send("User is not created")
          }

          const token = await generateToken(email);
          res.cookie("token",token)
          res.send("Signed Successfully")
        } catch (error) {
        
            console.log(error,"Something wrong")
            res.status(500).send("Internal Server Error")
    }
}



export const login = async (req, res)=>{

  try {

    const {email,password} = req.body;
    
    const user = await User.findOne({email})

    if (!user) {
      return res.send("User not found");
    }

    const matchPassword = await bcrypt.compare(password, user.hashpassword);

    if (!matchPassword) {
      return res.send("Password is not correct");
    }

    const token = generateToken(email);
    res.cookie("token", token);
    res.send("Logged in!").status(200);
    
  } catch (error) {
    
    console.log(error, "Something wrong");
    res.status(500).send("Internal Server Error");
  }
}

export const getUser = async (req,res)=>{
  try {
  
    const users = await User.find()
    res.send(users).status(200)
    
  } catch (error) {
  
    console.log("something went wrong")
        req.send("server error")
  }
    
  }