const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
<<<<<<< HEAD
=======
app.use("/api/blog",require("./routes/blog.routes"))
>>>>>>> feat/blog_routes

mongoose.connect("mongod://127.0.0.1:27017/test")
.then(()=>console.log("db connected"))
app.listen(4334,()=>{
    console.log("server started")
})