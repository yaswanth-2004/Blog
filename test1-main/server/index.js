import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import { postRouter } from "./router/post.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/post",postRouter)

mongoose.connect("mongodb+srv://yaswanthraje2004:yash7418340216@blog.emzfxlh.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.once("open",() => console.log("connected to database..."))

app.listen(3001,()=>console.log("server started"))