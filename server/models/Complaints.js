const mongoose=require('mongoose')
const ComplaintsSchema=new mongoose.Schema({
    username:String,
    vehiclename:String,
    complaint:String,
});
const Complaints=mongoose.model("complaints",ComplaintsSchema,"complaints")

module.exports=Complaints;