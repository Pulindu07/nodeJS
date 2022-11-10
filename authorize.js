const authorize = (req,res,next)=>{
    const {user,id} = req.query
    if(user==="Pulindu"&&id==="13"){
        console.log("Authorized!")
        next()
    }else{
        console.log("Not Authorized!")
        res.send("Invalid User or ID !!!")
    }
}

module.exports = authorize