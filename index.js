const express=require("express");
const app=express();
app.use(express.static('public'));
const connection=require("./configs/db");
const PORT=8000;
const controller=require("./controller/controller.module")
app.use(express.json());
app.use("/posts",controller)
app.listen(PORT,()=>{
    try{
        connection();
        console.log("port is running on:"+PORT)
    }
    catch(error){
        console.log(error)
    }
})