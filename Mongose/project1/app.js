const express=require("express")
const app=express()
const ejs=require("ejs")
const bodyParser=require("body-parser")
app.use(bodyParser.json())
const {connectMongoose,User}=require("./database")
connectMongoose()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("home")
})


app.post("/register",async(req,res)=>{
    const user= await User.findOne({username:req.body.username})
    if(user) return res.status(400).send("User already exists")
const newUser=await User.create(req.body)
req.status(201).send(newUser)
})
app.listen(4000,()=>{
    console.log("connected to 4000 port")
})