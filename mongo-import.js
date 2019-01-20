var mon=require('mongodb').MongoClient;
//console.log(mon);
var url="mongodb://localhost:27017/";
mon.connect(url,{useNewUrlParser:true},(err,client)=>{
  if(err)
return  console.log("connected unsuccessfull");
console.log("connected successfull")
  var db=client.db('wow');
  // db.collection("wow1").find().toArray().then((array)=>{
  //   console.log(`wow +${JSON.stringify(array,null,2)}`);
  // },(err)=>{
  //   console.log("failed",err);
  // });
  db.collection('wow1').insertOne({
    name:"uday is a good boy",
    age:"22"
  },(err,result)=>{
    if(err){
      return console.log("unable to insert",err);
    }
    console.log(result);
    console.log(JSON.stringify(result.ops,undefined,10));
  });
  client.close();
});
