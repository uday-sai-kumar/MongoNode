var mon=require('mongodb').MongoClient;
//console.log(mon);
var url="mongodb://localhost:27017/";
mon.connect(url,{useNewUrlParser:true},(err,client)=>{
  if(err)
return  console.log("connected unsuccessfull");
console.log("connected successfull")
  var db=client.db('wow');
  // db.collection("wow1").deleteMany({name:"good"}).then((result)=>{
  //   console.log(result);
  // });
db.collection("wow").
  client.close();
});
