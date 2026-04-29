const express = require('express')
const app = express();
const db = require('./db');

const person= require('./models/person');
const menuItem=require('./models/menuItem');
const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body


app.get('/', function(req, res){
    res.send("welcome to my profile ...how i can help you ?")
})

//import the router files
const personRoutes=require('./routes/personRoutes');
//use the routers
app.use('/person', personRoutes);
//import the router files
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);
app.listen(3000, ()=>{
    console.log("server is on")
})


// const objectToconver={
// name:"sujal",
// age:25
// };
// const json=JSON.stringify(objectToconver);
// console.log(json);
// console.log(typeof json);
// var _=require('lodash');
// const notes = require('./notes.js');
// var age=notes.age;
// console.log(age);

// var result=notes.addsum(age+18,3);
// console.log(result);

// var data=["sujal" , "sujal" , 1, 3, 2,3,2,1,];
// var filter=_.uniq(data);
// console.log(filter);

// var fs=require('fs');
// var os= require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile('greeting.txt','hi'+user.username +'\n',()=>{console.log(" hi sujal")});

// console.log(os);









// function callback(){
//     console.log("now adding is successful complete");
// }

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("Result:" +result);
//     callback();
// }
// add(37,2, callback);