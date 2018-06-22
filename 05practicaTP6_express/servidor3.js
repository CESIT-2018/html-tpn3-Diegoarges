const PORT = 5000;
const express =require('express');
const app = express();

app.set("view engine","ejs"); // npm install ejs --save


app.get("/",(req,res) => { 

    let html="<h1>Hola</h1>";
   // res.send(html); servidor3
  // res.render(`index`);
   res.render(`index`, {nombre:"Juan", materias:["Algoritmos","Diseño","Programación 3"]});
});


app.get("/productos",(req,res,next) => { 
    const prodsArray=[   {nombre: "Producto1",cantidad:150},
                         {nombre: "Producto2",cantidad:5},
                         {nombre: "Producto3",cantidad:6},
                         {nombre: "Producto4",cantidad:70},
                         {nombre: "Producto5",cantidad:1},
                         {nombre: "Producto6",cantidad:0}
    ];

    res.render('productos',{prods : prodsArray});

});



app.listen(PORT,()=>console.info('Iniciando en puerto '+ PORT));