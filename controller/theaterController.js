import Theater from "../models/theatermodel.js";

   

export const getTheater = async (req,res)=>{
    try {
    
      const theaters = await Theater.find()
      res.send(theaters).status(200)
      
    } catch (error) {
    
      console.log("something went wrong")
          req.send("server error")
    }
      
    }


// export const addTheater = async(req,res)=>{

//     try {
       
//         const {theatername,location} = req.body;

//         const newTheater = new Theater({
//             theatername,
//             location,
//             role:"owner"
          
//         })

//         const addedTheater = await newTheater.save()
       

//         if(!addTheater){
//             return res.send("Theater addition failed")
//         }
//         return res.send(addedTheater )
        
//     } catch (error) {
//         console.log("something went wrong", error);
//        res.send("failed to add theater");

//     }
// }



export const getTheaterById = async (req,res)=>{

    const id = req.params.id

    try {

        const getTheater = await Theater.findById( { _id:id})
        res.send(getTheater).status(200)
        
    } catch (error) {
        console.log("something went wrong", error);
        res.send("server error");
    }

   
     
}





// export const addShowByOwner = async(req,res)=>{

//     const {movieid, showtime ,date, price} = req.body;
       
//     const theaterid = req.params.id


//     const theater = await Theater.findById(theaterid);
//     if (!theater || theater.ownerId) {
//       return res.status(400).json({ message: 'Invalid theater or permission denied' });
//     }
  
//     try {
      
//       const movie = await Movie.findById(movieid);
//       if (!movie) {
//         return res.status(400).json({ message: 'Invalid movie' });
//       }
     
//      const newShow = new Show({
//         movieid, showtime ,date,price
//      })
     
//      const addedShow = await newShow.save()

//      if(!addedShow){
//         return res.send("unable to add show")
//      }
//      res.send(addedShow)


// } catch (error) {
//     console.log("something went wrong", error);
//     res.send("failed to add show");

// }
  
// }

