var express= require("express");
var app= express();
 var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));


var productos = [
    { nombre: "Lapiz", image: "https://media.gettyimages.com/photos/pencil-picture-id125829580?s=612x612" },
    { nombre: "goma", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pink_Pearl_eraser.jpg" },
    { nombre: "Lapiz", image: "https://media.gettyimages.com/photos/pencil-picture-id125829580?s=612x612" },

    { nombre: "goma", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pink_Pearl_eraser.jpg" },
    { nombre: "Lapiz", image: "https://media.gettyimages.com/photos/pencil-picture-id125829580?s=612x612" },

    { nombre: "goma", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pink_Pearl_eraser.jpg" },
    { nombre: "Lapiz", image: "https://media.gettyimages.com/photos/pencil-picture-id125829580?s=612x612" },

    { nombre: "goma", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pink_Pearl_eraser.jpg" },
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

app.get("/productos/:nombre",function (req,res) {
    var nombre=req.params.nombre;
    res.render("producto.ejs", {nombre:nombre});
})

app.get("/producto/agregar",function(req,res){
    res.render("agregarproducto.ejs");
})

app.post("/producto/agregar",function(req,res){
    var nombre=req.body.nombre;
    var img = req.body.img;
    var producto = {nombre:nombre, image:img};
    productos.push(producto);
    console.log(productos);
    res.redirect("/productos");
})



app.listen(3000,function(){
    console.log("server has started");
})