const express=require("express")

const mongoose=require("mongoose")

const cors=require("cors")



const{travelmodel}=require("./models/travel")

const app =express()



mongoose.connect("mongodb+srv://apple:apple@cluster0.e0cdooh.mongodb.net/traveldb?retryWrites=true&w=majority&appName=Cluster0")


app.use(cors())


app.use(express.json())



app.get("/",(req,res)=>{

    res.send("hello")
})



app.get("/view",(req,res)=>{
    travelmodel.find().then().then(
        (data)=>
            {
                res.json(data)
            }
    ).catch()
    
})



app.post("/add",(req,res)=>{

    let input=req.body
     
    let travel=new travelmodel(input)
    travel.save()

    res.json({status :"success"})
   
    
})










app.post("/delete",(req,res)=>{
    let input=req.body
    travelmodel.findByIdAndDelete(input._id).then(
        (response)=>{
        res.json({"status":"success"})
    }).catch((error)=>{
        res.json({"status":"error"})
    })
}
)





app.post("/search",(req,res)=>{
   
     let input=req.body
     travelmodel.find(input).then(
     
        (data)=>
            {
                res.json(data)
            }
        ).catch()
    
})


app.listen(8088,()=>{
    console.log("server started")
})
