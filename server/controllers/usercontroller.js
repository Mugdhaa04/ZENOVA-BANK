const User = require("../models/User");


exports.addUser = async(req,res)=>{

 try{

 const user = await User.create(req.body);

 res.json({
  message:"User Added",
  user
 });

 }catch(error){

 res.status(500).json(error);

 }

}