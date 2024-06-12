const mongoose=require("mongoose")
const schema=mongoose.Schema(

{
    "place" :String,
    "placedescrption":String,
    "packege":String,
    "travelagent":String,
    "price" :String,
    "imageurl":String,
    "jdate":String

}

)

let travelmodel = mongoose.model("travel",schema);

module.exports={travelmodel}






