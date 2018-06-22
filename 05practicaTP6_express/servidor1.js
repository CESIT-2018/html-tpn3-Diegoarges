const express =require('express');
const app = express();
const getHomeCallBack=(req,res)=>{
    console.info("Hola Mundo desde Express");
    res.send("Hola!");
};
app.get("/",getHomeCallBack);
app.get("/productos",(req,res)=>{
    let html="<h1>Productos</h1>";
    res.send(html);

});

app.use(express.static("ypublic"));
app.listen(3000,()=>console.info("Iniciando en puerto 3000"));