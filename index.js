import express from 'express';
import {engine} from'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express();
//Middlewares
////Handlebars
server.engine('handlebars', engine({
  defaultlayout: 'main'
}));
server.set('view engine','handlebars');
server.set('views', './views')
server.use(express.static(path.join(__dirname, 'public')));
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