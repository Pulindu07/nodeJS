const express = require("express")
const path = require("path")
const logger = require("./logger")
const apiLoggers = require("./specific-middle-ware")

const app = express()
//middleware functions

// app.use(logger) /*This midleware get applied to all the routes */

app.use("/api",apiLoggers) /* This middleware gets applied to all the routes starting with "localhost:8000/api/" */

app.get("/",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"./public/index.html"))
})

app.get("/api",(req,res)=>{
    res.send("<button><a href='http://hn.algolia.com/api/v1/search?query=foo&tags=story'>Click</a></button>")
})
app.get("http://hn.algolia.com/api/v1/search?query=foo&tags=story",(req,res)=>{
    res.fetch("http://hn.algolia.com/api/v1/search?query=foo&tags=story")
})

app.get("/api/v2/query",(req,res)=>{
    // console.log(req.query)
    res.status(200).sendFile(path.join(__dirname,"./public/index.html"))
})
app.all("*",(req,res)=>{
    res.status(404).send("Page is not available!")
})

const port =8000
app.listen(port, function(){
    console.log(`Server started on Port ${port}`);
});