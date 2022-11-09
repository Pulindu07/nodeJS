const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.send("<h1>Hello World</h1>");
});
app.get("/contact", function(req,res){
    res.send("You can contact me @ pulindujanith@gmail.com");
});
app.get("/about", function(req, res){
    res.send("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Coffee</li><li>Photography</li><li>Binge Watching</li></ul>")
})
const port =8000
app.listen(port, function(){
    console.log(`Server started on Port ${port}`);
});