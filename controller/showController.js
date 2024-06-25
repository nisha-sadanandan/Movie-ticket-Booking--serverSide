import Show from "../models/showmodel.js"





export  const getMovieShowByTheater = async(req,res)=>{

    const theatername =req.params.theatername
    try {
        
        const show = await Show.find({theatername})
        res.send(show).status(200)  
        console.log(show)   
        
    } catch (error) {

        console.log(error)
        res.send("sever error")
        
    }
}





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

    const title =req.params.title
    try {
        
        const show = await Show.find({title})
        res.send(show).status(200)  
        console.log(show)   
        
    } catch (error) {

        console.log(error)
        res.send("sever error")
        
    }
}


export  const getShowbyid = async(req,res)=>{

    const movieid =req.params.id
    try {
        
        const show = await Show.findOne({movieid})
        res.send(show).status(200)  
        console.log(show)   
        
    } catch (error) {

        console.log(error)
        res.send("sever error")
        
    }
}



