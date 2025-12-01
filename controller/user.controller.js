module.exports.getAlluserss=async(req,res)=>{
    res.json({
        status:true,
        data:[{name:"Nitesh"},{name:"Ritik"}]
    })
}