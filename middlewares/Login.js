
const jwt = require("jsonwebtoken")
// const { Jwt_secret } = require("../keys")
const mongoose = require("mongoose")
const USER = mongoose.model("USER")
module.exports = (req, res, next) => {
    // console.log("hello middleware");
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must have logged in 1" })
    }
    //res.json("ok")
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must have logged in 2" })
        }
         console.log(payload);
        res.json(payload)
         const { _id } = payload
         USER.findById(_id).then(userData => {
           // req.user=userData
           //  console.log(userData);
             next()
         })
    })

   
}