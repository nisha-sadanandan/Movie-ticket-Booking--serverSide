import Review from "../models/reviewModel.js"



export const addReview = async(req,res)=>{

    const {rating ,reviewtext,movieid,userid } = req.body

    try {
        
       const existingReview = await Review.findOne({userid,movieid})

        if(existingReview){
            return res.send("you have already reviewed")
        }

        const review = new Review ({
           movieid,
           rating,
           reviewtext
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

    const id =req.params.id;

    try {

      const getReview = await Review.findById({_id:id})
      res.send(getReview)      

    } catch (error) {
        console.log("error")
        res.send("server error")
    }
}