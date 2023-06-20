const express=require("express")
const app=express()
const bodyParser=require("body-parser")

const studentArray=require("./InitialData")
var currentId=studentArray.length;
//app.use(express.json())
app.use(bodyParser.json())
app.get("/api/students",(req,res)=>{
    res.json(studentArray)
})



app.get("/api/students/:id",(req,res)=>{
    let id=req.params.id;
    if(!isNaN(id)){
        id=parseInt(id)
        let studentObject=studentArray.find((e)=>{
            return (e.id===id)

        })
        if(studentObject === undefined || studentObject ==={}){
            return res.sendStatus(404)
        }
        else{
            return res.json(studentObject)
        }
        
    }
    else{
        return res.sendStatus(404)
    }
})
app.post("/api/students",(req,res)=>{
    let reqkeys=Object.keys(req.body)
    res.json(reqkeys)
    if(reqkeys.find((e)=>{
        return e==="first_name"
    }) && reqkeys.find ((e)=>{
        return e==="last_name"
    }) && reqkeys.find((e)=>{
        return e ==="email"
    })){
        if(!isNaN(req,body.last_name)){
            let  first_name =req.body.first_name;
            let last_name=req.body.last_name;
            let email=req.body.email;
currentId++;

studentArray.push({id:currentId,first_name:first_name,last_name:last_name,email:email})
return res.json({id:currentId})



        }
        else{
            return res.sendStatus(400)
        }
    }
    else{
        return res.sendStatus(400)
    }
})



app.put("/api/students/:id",(req,res)=>{
    if(!isNaN(req,params.id)){
let id=parseInt(req,params.id)
let studentObjectOld=studentArray.find((e)=>{
    return e.id ===id
})
if(studentObjectOld === undefined){
    return res.sendStatus(404)
}
else{
    let updateObject =req.body;
    if(Object.keys(updateObject).find((e)=>{
        return  e ==="last_name"
    })){
        if(!isNaN(updateObject.last_name)){

updateObject.last_name=parseInt(updateObject.last_name)

        }
        else{
            return res.sendStatus(400)
        }
    }
    let std={...studentObjectOld,...updateObject}
let inddex=studentArray.indexOf(studentObjectOld)
studentArray.splice(index,1)
studentArray.push(std)
res.sendStatus(200)

}
}
else{
    return res.sendStatus(400)
}
})

app.delete("/api/students/:id",(req,res)=>{
let id=req.params.id;
if(!isNaN(id)){
    id=parseInt(id)

let studentOld=studentArray.find((e)=>{
    return e.id === id
})

if(studentOld!==undefined){
    let index=studentArray.indexOf(studentOld)
    studentArray.splice(index,1)
    return res.sendStatus(200)
}
else{
    return res.sendStatus(404)
}

}

else{
    return res.sendStatus(400)
}
})


app.listen(5000,()=>{
    console.log("listenign to 5000 port")
})