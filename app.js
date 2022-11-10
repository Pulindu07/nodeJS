const express = require("express")
const path = require("path")

const app = express()

app.get("/",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"./public/index.html"))
})

app.all("*",(req,res)=>{
    res.status(404).send("Page is not available!")
})

const port =8000
app.listen(port, function(){
    console.log(`Server started on Port ${port}`);
});