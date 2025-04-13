const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
const { application } = require('express');
main()
.then(()=>{
    console.log("connection successfull !")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let allChats = [
  {
    from : "raman",
    to : "arpita ",
    msg : "do whatever you want",
    created_at : new Date()

  },
  {
  from :"priya",
  to : "pranjal",
  msg : "stay",
  created_at : new Date()
  }

];




Chat.insertMany(allChats);
