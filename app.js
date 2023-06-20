
const express=require("express")
const fs=require("fs")
//const path=require("path")
const app=express()
//app.set("view engine","hbs")
app.set("view engine","ejs")

app.get("/",(req,res)=>{
  res.render("index",{name:"pooja"})
  
})
var demo={
  name:"gyan",
  age:47,
  salary:68788
}
app.get("/about",(req,res)=>{
  res.render("about",{demo:demo})
})
var projects={
  name:"pooja",
  skills:["html","css","js"]
}
app.get("/adfar",(req,res)=>{
  res.render("adfar",{projects:projects})
})




//console.log(__dirname)




//app.use("/static",express.static(path.join(__dirname,"./src")))




//app.get("/about",(req,res)=>{
  //  const data=fs.readFileSync("adfar.html","utf-8")
    //res.send(data)
//})

//app.get("/html",(req,res)=>{
  //  res.write("<h1>pooja</h1>")
    //res.write("<h1>pooja</h1>")
    //res.write("<h1>pooja</h1>")
    //res.write("<h1>pooja</h1>")
    
   // res.send()
//})

//app.get("/temp",(req,res)=>{
  //res.send({
   // id:1,
    //name:"pooja"
  //})
//})

//app.post("/section",(req,res)=>{
  //  res.send([{
    //  id:1,name:"chotu",
    //},{
//id:2,name:"rohit"
    
  //  }])
  //})

app.listen(4000,()=>{
    console.log("listening to 4000 port")
})