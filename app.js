
const express = require("express");
const app = express();
const helmet = require('helmet');
const port = 2000;

app.use(express.json());

//Array we're gonna use as a database
const users= [
    {
        id:1,
        username: "Sallal Haider",
        password:"sallalhadier"
    },
    {
        id:2,
        username: "Balach Haider",
        password:"balachhadier"
    }
]

//Request get
app.get('/', (req,res) => {
    res.status(200).send(users);
    })

//Request get By Id
app.get('/:id',(req,res)=>{
    
const user =  users.filter(c=>c.id == req.params.id);
 res.send(user);


//Request Post
app.post('/post',(req,res)=>{
      const user = {
        id: users.length + 1,
        username: req.body.username,
        password: req.body.password
      }
      users.push(user);
      res.send(user);
})


//Request Delete
app.delete('/:id',(req,res)=>{
   const user = users.find(c=>c.id===req.params.id);
  const index = users.indexOf(user);
  users.splice(index , 1);
  res.send(user)
;})

})
    




app.listen(port, ()=>{
    console.log("Working");
})



