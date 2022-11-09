const http = require("http")
const port =8000
const server = http.createServer((req,res)=>{
    res.write("Welcome")
    res.end()
})



server.listen(port, function(){
    console.log(`Server started on Port ${port}`);
});