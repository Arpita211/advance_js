const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test')
main()
.then(()=>{
    console.log("connection successful!")
})


.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number


})
const User = mongoose.model("User",userSchema)
User.findOneAndDelete({name : "Bruece"})
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
/*User.deleteMany({name : "Elena"}) .then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
User.findOneAndUpdate({name : "Elena"},{name : "Bruece"},{new : true})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
User.findOneAndUpdate({name : "Elena"},{name : "Bruece"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
User.updateOne({age : 19},{name : "adam"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
User.find({age : {$gt : 16}}).then((res)=>{
    console.log(res[0].name)
})
.catch((err)=>{
    console.log(err)
})
User.findOne({age : {$gt : 16}}).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
//
User.insertMany([
    {name : "damon", email : "damon.abc" , age : 19},
    {name : "stefan", email : "stefan.abc", age : 20}
])
.then((res)=>{
    console.log(res)
})*/