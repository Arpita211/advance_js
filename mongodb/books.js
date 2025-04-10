const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successfull!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = new mongoose.Schema({
    Tittle : {
        type : String,
        required : true,
        maxLength : 20
    },
    author : {
        type : String
    },
    price : {
        type : Number,
        min :[1 , "price is too low for selling"]
    },
    discount :{
        type : Number,
        default : 10
    },
    category: {
        type : String,
        enum : [ "fictional", "non-fictional"]
    },
    genre : [String],

}
) 
const Book = mongoose.model("Book",bookSchema)
Book.findByIdAndUpdate('67f79c4c7906c9f2261b0588',{ price : -500},{runValidators: true}).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.errors.price.properties)
    
})
/*let book1 = new  Book({
    Tittle : "maths",
    author : "H.M",
    price : 500,
    category : "non-fictional",
    genre : ["fictional","comic "]
})  

book1.save()
.then((res)=>{
    console.log(res)
}) 
.catch((err)=>{
    console.log(err)
})
//if require field cant be field model validation be failed
// if type is mismathed it also showa validation error but if we pass number but in string formate it can run perfectly 
// type should be parseable*/