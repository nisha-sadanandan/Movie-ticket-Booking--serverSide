import Review from "../models/reviewModel.js"







export const addReview = async(req,res)=>{

    const {rating ,reviewtext,username} = req.body

    const movieid = req.params.id

    try {
        
       const existingReview = await Review.findOne({username,movieid})

        if(existingReview){
            return res.send("you have already reviewed")
        }

        const review = new Review ({
           username,
           rating,
           reviewtext,
           movieid
        })

        const addedreview = await review.save()

        if(!addedreview){
           return res.send("unable to add review")
        }
        res.send(addedreview)

        
    } catch (error) {
        console.log("something went wrong")
        res.send("server error")
        
    }
}


export const getReviewOfMovie = async (req,res)=>{


    const movieid =req.params.id;

    try {
      const getReview = await Review.find({movieid})
      res.send(getReview)   
      console.log(getReview) 
    

    } catch (error) {
        console.log("error")
        res.send("server error")
    }
}