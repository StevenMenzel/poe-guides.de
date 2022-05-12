const express = require('express');
const server = express();
//Middlewares
///Example
server.use((req,res,next)=>{

});
//Routes
/// Home
server.get('/', (req , res)=>{

  res.send('Home')
});


// Server
const port = 80;
server.listen(port,()=>{
  console.log(`Server started on Port ${port}`);
})