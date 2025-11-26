const router = require("express").Router();
router.get("/getallusers",(req,res)=>{
    res.json({
        status:true,
        data:[{name:"Nitesh"},{name:"Ritik"}]
    })
})

module.exports=router;