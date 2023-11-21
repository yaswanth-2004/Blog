import  express  from "express"

import Post from "../model/Posts.js"

const router = express.Router()

router.get('/',async(req,res)=>{
    try{

        const response = await Post.find({})
        res.json(response)
        console.log(response);
    }catch(e){
        console.log(e);
    }
})


export {router as postRouter}

































































