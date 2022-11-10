const moment = require("moment")
const apiLoggers = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = moment().format("DD/MM/YYYY")
    console.log(method,url,time)
    next()
}

module.exports=apiLoggers