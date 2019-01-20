var {mongoose}=require('./db/mong');
var {model}=require('./model/user');
//console.log(mongoose);

var {mon}=require('./db/mong');
//console.log(mon);
var express=require('express');
var parser=require('body-parser');
//console.log(express);
//console.log(parser);
var app=new express();
app.use(parser.json());
app.post('/usk',(req,res)=>{
  console.log(req.body);
  var users=new model({
    name:req.body.name,age:req.body.age
  });
  users.save().then((doc)=>{
  res.send(doc);
},(err)=>{
  res.status(400).send(err);
});
});
app.listen("2020",()=>{
  console.log("listening on port 2020");
});
