const express= require("express");
const router = express.Router();
const {getAllBlogs} = require("../controller/blog.controller")

router.get("/getblogs",getAllBlogs);

module.exports = router