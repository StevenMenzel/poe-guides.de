const express = require('express');
const server = express();

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