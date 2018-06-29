const PORT = 5000;
const express = require('express'); 
const app = express(); 

app.set("view engine","ejs"); // npm install ejs --save

//para poder usar Bootstrap
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get("/",(req,res) => { 

    res.render('index');  //res.send(html); anterior
});

app.get("/productos",(req,res,next) => { 
    const prodsArray=[   {nombre: "Mouse Genius",descripcion: "Mouse inalambrico", precio: "$150", cantidad:14},
                         {nombre: "Teclado Logitech",descripcion: "Teclado Ergonómico con pad numérico", precio: "$350", cantidad:50},
                         {nombre: "HP550 ij",descripcion: "Impresora Deskjet HP550ij", precio: "$1500", cantidad:3},
                         {nombre: "Producto4",descripcion: "Descripción4", precio: "$120", cantidad:70},
                         {nombre: "Producto5",descripcion: "Descripción5", precio: "$110", cantidad:1},
                         {nombre: "Producto6",descripcion: "Descripción6", precio: "$120", cantidad:0}
    ];

    res.render('productos',{prods : prodsArray});

});

app.get('/perfil',(req,res)=> {
    res.render('perfil');  //res.send(html); anterior
});

app.get('/servicios',(req,res)=> {
    res.render('servicios');  
});

app.get('/formulario',(req,res)=> {
    res.render('formulario');  
});

app.use(express.static('public')); //Acceso a la carpeta public
app.listen(PORT , () => console.info('Iniciando en puerto '+ PORT));


