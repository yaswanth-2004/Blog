import express from "express"
import mongoose from  "mongoose"

const  PostSchema = new mongoose.Schema({
    title:{
        type:String}
        ,
    imageUrl:{type:String,},

    desc:{type:String},
})

export default mongoose.model("Post",PostSchema)