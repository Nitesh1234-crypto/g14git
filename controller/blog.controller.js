exports.getAllBlogs= async(req,res)=>{
    res.json({
        status:"ok",
        data:[{title:"first blog"},{title:"second"}]
    })
}