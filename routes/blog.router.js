const router = require("express").Router();
router.get("/getblogs",(req,res)=>{
    res.json({
        success:true,
        data:[{title:"Myblog"},{title:"second blog"}]
    })
})