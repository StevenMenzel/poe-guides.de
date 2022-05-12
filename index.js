import express from 'express';
import {engine} from'express-handlebars';
const server = express();
//Middlewares
////Handlebars
server.engine('handlebars', engine({
  defaultlayout: 'main'
}));
server.set('view engine','handlebars');
server.set('views', './views')
//Routes
/// Home
server.get('/', (req , res)=>{
  res.render('index')
});


// Server
const port = 80;
server.listen(port,()=>{
  console.log(`Server started on Port ${port}`);
})