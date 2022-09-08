require('./student.model'); 

var mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://TheNextElonMusk:1234@cluster0.uz3j8sr.mongodb.net/test',
 {
  useNewUrlParser: true
 },
 (err) =>{
  if(!err){
    console.log("connection succeeded");
  } else {
    console.log("Error in connection");
  };
 }
 );

 require("./student.model")
