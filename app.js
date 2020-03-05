var express= require("express");
var app= express();


var productos = [

    { nombre: "Lapiz", image: "https://media.gettyimages.com/photos/pencil-picture-id125829580?s=612x612" },

    { nombre: "goma", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pink_Pearl_eraser.jpg" },


];

app.get("/",function(req,res) {
    res.send("saludos desde el servidor (hola mundo)")
    
})

app.get("/home",function (req,res) {
    var nombreser="Karla";
    res.render("home.ejs",{nombre:nombreser});
    
})

app.get("/productos",function(req,res){
    res.render("productos.ejs",{productos:productos})
})



app.listen(3000,function(){
    console.log("server has started");
})