import express from "express";
import mongoose from "mongoose";
import { PORT ,mongoDBURL} from "./config.js";
import { Book } from "./models/bookModel.js";
import cors from "cors";

const app=express();

app.use(express.json())
app.use(cors());
app.get("/",(req,res)=>{
    return res.status(234).send("Hello Welcome")
})




mongoose.connect(mongoDBURL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is listening on port:${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})