const router = require("express").Router();
router.get("/getusers",(req,res)=>{
    res.json({
        success:true,
        data:[{name:"Nitesh"},{name:"ritik"}]
    })
})
module.exports=router;