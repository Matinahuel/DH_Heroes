const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const views = path.join(__dirname,'/views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=> res.sendFile(path.join(views,'home.html')));
app.get('/seiya',(req,res)=> res.sendFile(path.join(views,'seiya.html')));
app.get('/shiryu',(req,res)=> res.sendFile(path.join(views,'shiryu.html')));
app.get('/hyoga',(req,res)=> res.sendFile(path.join(views,'hyoga.html')));
app.get('/shun',(req,res)=> res.sendFile(path.join(views,'shun.html')));
app.get('/ikki',(req,res)=> res.sendFile(path.join(views,'ikki.html')));
app.get('/saori',(req,res)=> res.sendFile(path.join(views,'saori.html')));
app.get('/tenma',(req,res)=> res.sendFile(path.join(views,'tenma.html')));


app.listen(port,() => console.log('Servidor funcionando en el puerto '+ port));