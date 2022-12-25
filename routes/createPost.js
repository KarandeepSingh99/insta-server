const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Login = require("../middlewares/Login");
const POST=mongoose.model("POST");

router.get("/allposts",(req,res)=>{
    POST.find()
    .populate("author","_id name")
    .then(posts=>res.json(posts))
    .catch(err=>console.log(err))
})
router.post("/createPost",Login,(req,res)=>{
    const {body,location,author,pic}=req.body;
    console.log(pic);
    if(!body || !location){
        return res.status(422).json({error:"please add body and location"})
    }
    // console.log(req.user)
    const post =new POST({
        body,
        location,
        photo:pic,
        author:author
    })
    post.save().then((result)=>{
        return res.json({post:result})
    }).catch(err=>console.log(err))
})

module.exports=router