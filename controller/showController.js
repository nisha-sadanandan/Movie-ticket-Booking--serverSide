import Show from "../models/showmodel.js"




export const getAllShow = async (req,res)=>{
    try {
        
         const show = await Show.find()
         res.send(show).status(200)
         
    } catch (error) {
        console.log(error)
        res.send("sever error")
        
    }
}

export  const getMovieShow = async(req,res)=>{

    const movieid =req.params.id
    try {
        
        const show = await Show.find({movieid})
        res.send(show).status(200)     
        
    } catch (error) {

        console.log(error)
        res.send("sever error")
        
    }
}