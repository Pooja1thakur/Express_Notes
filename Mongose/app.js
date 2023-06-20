var mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Omega").then(()=>{
    console.log("connect to mongodb")
}).catch((err)=>{
    console.log(err)
})
var student =new mongoose.Schema({
    name:String,
    workout:Boolean,
    age:Number
})

const Student=new mongoose.model("Student",student)


//const adder=()=>{
//const adfar=new Student({
  //  name:"adfar",
    //workout:false,
    //age:45
//})
//adfar.save()
//}
//adder()

//const adder=()=>{
  //  const adfar= Student.create({
    //    name:"pooja",
      //  workout:false,
       // age:45
    //})
    //adfar.save()
    //}
    //adder()


    const adder=async()=>{
       const adfar= await Student.find({name:"adfar"

    })
        console.log(adfar)
        }
        adder()