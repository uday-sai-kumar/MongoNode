var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wow', {useNewUrlParser: true});
module.exports={mongoose};
// (err)=>{
//   if(err){
//     return console.log("failure");
//   }
//   console.log("connected");
// });
