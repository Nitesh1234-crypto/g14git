const express= require("express");
const router = express.Router();

router.get("/getblogs",(req,res)=>{
    res.json({
        status:"ok",
        data:[{title:"first blog"},{title:"second"}]
    })
})

module.exports = router