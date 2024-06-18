import User from "../models/userModel.js"
import Theater from "../models/theatermodel.js"
import Show from "../models/showmodel.js"
import Movie from "../models/movieModel.js"
import Admin from "../models/adminModel.js"
import bcrypt from 'bcrypt';
import { adminToken } from "../utils/generateToken.js"




 export const adminSignup = async(req,res)=>{

  try {

    const {name,email,password} = req.body
    console.log(password)

     const existingAdmin = await Admin.findOne({email})
     if(existingAdmin){
      res.send("email already exist").status(400)
     }

     const saltRounds =10;
     const hashpassword = await bcrypt.hash(password,saltRounds)

     const newAdmin = new Admin({name,email,hashpassword,role:"admin"})
     const addedAdmin = await newAdmin.save()

     
     if(!addedAdmin){
       return res.send("admin not created")
     }


     const token = await adminToken(addedAdmin);
     res.cookie("token",token)
     res.send("Signed Successfully")

    
  } catch (error) {
    console.log(error,"Something wrong")
    res.status(500).send("Internal Server Error")
  }
 }


 export const adminLogin = async(req,res)=>{

  try {

    const {email,password} =req.body;
    const admin = await Admin.findOne({email})

    if(!admin){
      res.send("admin not found")
    }   
    const matchPassword = await bcrypt.compare(password,admin.hashpassword);

    if(!matchPassword){
      res.send("incorrect password")
    }

    const token = adminToken(admin)
    res.cookie("token",token)
    res.send("logged sucessfully")
    
  } catch (error) {
    console.error("Error", error);
    res.status(500).send("Internal Server Error");
  }
 }



  export  const overview = async(req,res)=>{

  try {

     const totalUser = await User.countDocuments();
     const totalTheater = await Theater.countDocuments();
     const totalShows = await Show.countDocuments();

     const user =await User.find()

     const theater =await Theater.find()

     const show = await Show.find()


    res.send({
      totalUser,
      totalTheater,
      totalShows,
      user,
      theater,
      show
     })
 
  
  } catch (error) {
    console.log("something went wrong", error);
     res.send("failed to find documents");
        
  }
 }
  

 export const addShowByAdmin = async (req,res)=>{

  const {theatername,location,title,showtime,date,price} = req.body;

  try {
      
      const movie = await Movie.findOne({title})
      if(!movie){
        res.send("invalid Movie")
      }

      const theater = await Theater.findOne({theatername})
      if(!theater){
        res.send("invalid Theater")
      }
      
        const newshows = new Show({theatername,location,title,showtime,date,price})

       const addedShow = await newshows.save()
        res.send(addedShow)
        
  } catch (error) {
    
      console.log("something went wrong")
      res.send("show addition failed")
  }
 }


 


 


