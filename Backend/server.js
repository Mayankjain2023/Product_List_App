var express=require('express');
var bodyparser=require('body-parser');
var mongoose=require('mongoose');


//file includes
var config=require('./config/config');

var app=express();
var db;


//parse json
app.use(bodyparser.json());

//uploads
app.use(express.static('./uploads'))


//set headers for cross origin

app.all('/*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-type,Accept,X-Access-Token,X-key');
    if(req.method=='OPTIONS'){
        res.status(200).end();
    }else{
        next();
    }
});

app.use('/',require('./routes'));

app.use(function(req,res,next){
    res.status(404).json({status:"Page not found"}).end(); 
});

//start server

app.set('port',config.port);
var server=app.listen(app.get('port'),function(){
    console.log('Express server listening on port :'+ server.address().port);

});

mongoose.connect(config.mongo.url,function(err,database){
    if(err){
        console.log(err);
        process.exit(1);
    }

    db=database;
    console.log("Database connection okay");
})