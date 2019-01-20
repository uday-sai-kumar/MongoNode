var mon=require('mongodb').MongoClient;
var url="mongodb://usk:uforusk123@ds141641.mlab.com:41641/sasi_attendance";
mon.connect(url,{useNewUrlParser:true},(err,client)=>{
  if(err)
return  console.log("connected unsuccessfull");
console.log("connected successfull")
  var db=client.db('sasi_attendance');
  db.collection("traialcheck").insertOne({name:"uskusk",_id:123},(err,result)=>{
    if(err)return console.log("failed");
    console.log(result);
  });
  //console.log(db);
  client.close();
});
