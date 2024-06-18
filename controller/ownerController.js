import Theater from "../models/theatermodel.js";
import {ownerToken} from '../utils/generateToken.js'
import bcrypt from 'bcrypt';
import Owner from "../models/ownermodel.js";
import Show from "../models/showmodel.js"
import Movie from "../models/movieModel.js"





export const ownerSignup = async(req,res)=>{

    try {
  
      const {name,email,password} = req.body
      console.log(password)
  
       const existingOwner = await Owner.findOne({email})
       if(existingOwner){
        res.send("email already exist").status(400)
       }
  
       const saltRounds =10;
       const hashpassword = await bcrypt.hash(password,saltRounds)
  
       const newowner = new Owner({name,email,hashpassword,role:"owner"})
       const addedowner = await newowner .save()
  
       
       if(!addedowner){
         return res.send("owner not created")
       }
  
  
       const token = await ownerToken(addedowner);
       res.cookie("token",token)
       res.send("Signed Successfully")
  
      
    } catch (error) {
      console.log(error,"Something wrong")
      res.status(500).send("Internal Server Error")
    }
   }
  
  
   export const ownerLogin = async(req,res)=>{
  
    try {
  
      const {email,password} =req.body;
      const owner = await Owner.findOne({email})
  
      if(!owner){
        res.send("owner not found")
      }   
      const matchPassword = await bcrypt.compare(password,owner.hashpassword) 
  
      if(!matchPassword){
        res.send("incorrect password")
      }
  
      const token = ownerToken(owner)
      res.cookie("token",token)
      res.send("logged sucessfully")
      
    } catch (error) {
      console.error("Error", error);
      res.status(500).send("Internal Server Error");
    }
   }
  

   
export const addTheater = async(req,res)=>{

    try {
       
        const {theatername,location} = req.body;

        const newTheater = new Theater({
            theatername,
            location,   
        })

        const addedTheater = await newTheater.save()
       

        if(!addTheater){
            return res.send("Theater addition failed")
        }
        return res.send(addedTheater )
        
    } catch (error) {
        console.log("something went wrong", error);
       res.send("failed to add theater");

    }
}

  


export const addShowByOwner = async(req,res)=>{

    const {title,theatername, showtime ,date, price,location} = req.body;
       

    try {
      
      const movie = await Movie.find();
      if (!movie) {
        return res.status(400).json({ message: 'Invalid movie' });
      }
     
     const newShow = new Show({
        title,showtime ,date,price,location,theatername})
     
     const addedShow = await newShow.save()

     if(!addedShow){
        return res.send("unable to add show")
     }
     res.send(addedShow)


} catch (error) {
    console.log("something went wrong", error);
    res.send("failed to add show");

}
  
}

  




