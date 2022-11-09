const http = require("http")
const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("response",()=>{
    console.log("Data Received!")
})

customEmitter.emit("response")

const port =8000
const server = http.createServer((req,res)=>{
    res.write("Welcome")
    res.end()
    // console.log("req: ",req,"res: ",res)
})



server.listen(port, function(){
    console.log(`Server started on Port ${port}`);
});