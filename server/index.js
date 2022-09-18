const fs = require('fs');

const express = require('express');

const app = express();

app.use(express.json());

app.get("/todo",(req,res)=>{
    fs.readFile('./db.json', {encoding: 'utf-8'},(err,data)=>{
          if(err){
       return res.status(404).send({response:"false"})
          }
          res.status(200).send(data)
    })
   
})

app.post("/todo",(req,res)=>{
      
    fs.readFile('./db.json', {encoding: 'utf-8'},(err,data)=>{
          if(err){
          return res.status(404).send({response:"false"})
          }
          if(req.body.task && req.body.id){
            const Todo = JSON.parse(data);
            Todo.todo = [...Todo.todo,req.body];
  
            fs.writeFile('./db.json',JSON.stringify(Todo),{encoding:"utf-8"},()=>{
              res.status(200).send({response:"true"})
            });
          }
         
    })
   
})

app.delete('/todo/:id',(req,res)=>{
    const id = req.params.id;

    fs.readFile('./db.json', {encoding: 'utf-8'},(err,data)=>{
        if(err){
        return res.status(404).send({response:"false"})
        }
        const Todo = JSON.parse(data);
       const Todo2 =   Todo.todo.filter((res)=>{
        return res.id != id;
       })
       Todo.todo = [...Todo2]

        fs.writeFile('./db.json',JSON.stringify(Todo),{encoding:"utf-8"},()=>{
          res.status(200).send({response:"true"})
        });
  })
  
})






app.put('/todo/:id',(req,res)=>{
  const id = req.params.id;

  fs.readFile('./db.json', {encoding: 'utf-8'},(err,data)=>{
      if(err){
      return res.status(404).send({response:"false"})
      }
      const Todo = JSON.parse(data);
     const Todo2 =   Todo.todo.filter((res)=>{
      return res.id != id;
     })
      
     let invtodo = Todo.todo.find((res)=>{
      return res.id == id;
     })
    
     let obj = {
       ...invtodo,...req.body
     }
        Todo.todo = [...Todo2,obj]

      fs.writeFile('./db.json',JSON.stringify(Todo),{encoding:"utf-8"},()=>{
        res.status(200).send({response:"true"})
      });
})

})





app.listen(8080,()=>{
    console.log("Start");
})