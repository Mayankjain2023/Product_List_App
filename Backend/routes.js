const { setDefaultResultOrder } = require('dns');
var express=require('express');
var router=express.Router();
var products=require('./controllers/products.js');
const async=require('async');


router.get('/myapi/products/',products.getAll);
router.get('/myapi/product/:id',products.getOne);
router.post('/myapi/product/',products.create);
router.put('/myapi/product/:id',products.update);
router.delete('/myapi/product/:id',products.delete);

// router.post('/myapi/product',function(req,res,next){
//     const tasks=[
//         function first(cb){
//             let product={
//                 name:'sample',
//                 price:20
//             }
//             products.create(product,(err,res)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 if(res){
//                     cb(null,{res:res});
//                 }
//             })

//         },
//         function second(payload,cb){

//             let product={
//                 name:'sample',
//                 price:20
//             }
//             products.create(product,(err,res)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 if(res){
//                     cb(null,{res:res});
//                 }
//             })

//         }
//     ]

//     async.waterfall(tasks,(err,results)=>{
//         if(err){
//             console.log(err);
//         }
//         if(results){
//             console.log(results);
//         }
//     })
// })

module.exports=router;