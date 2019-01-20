var mongoose=require('mongoose');
var model=mongoose.model('wow2',{
  name:{
  type:String
},
age:{
  type:Number
}
});
module.exports={model};
