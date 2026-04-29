const mongoose= require('mongoose');
// Define the mongodb connection URL//127.0.0.1://hotels is location
const mongoURL='mongodb://localhost:27017/hotels'

//set up mongodb connection
mongoose.connect(mongoURL);
const db= mongoose.connection;


//Define event listeners for database connection
db.on('connected',()=>{
    console.log('connected to mongoDB server');
});
db.on('error',(err)=>{
    console.log("mongodb connection error:",err);
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});


module.exports=db;