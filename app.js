require('dotenv').config()

const express=require("express");
// J0e09v7KtL9NEwOK
//karan
const app=express();
const PORT=process.env.PORT;
const mongoose = require("mongoose");
// const { mongoUrl } = require("./keys");
const cors = require("cors");


require("./models/model")
require("./models/post")

app.use(cors())

app.use(express.json());

app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongodb")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})



app.get('/',(req,res)=>{
    res.json('hello home')
})
app.get('/about',(req,res)=>{
    res.json({
        name:"Karandeep",
        email:"karandeep100399@gmail.com"
    })
})


app.listen(PORT,"localhost",()=>{
    console.log("server running on " + PORT);
})