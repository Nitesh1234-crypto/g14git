const router = require("express").Router();
const{getAlluserss}=require("../controller/user.controller")
router.get("/getallusers",getAlluserss)

module.exports=router;