var async=require('async')
var productModel=require('../models/product.js');

var products={
    getAll:function(req,res){

        const tasks=[
            function getproduct(cb){
                productModel.find(function(err,docs){
                    if(err){
                        res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
                    }else{
                        cb(null,{res:res.status(200).json({status:'success',message:'success',docs:docs})});
                    }
                });
            }
        ];

        
        async.waterfall(tasks,(err,results)=>{
            if(err){
                console.log(err);
            }
            if(results){
                console.log(results);
            }
        })

           
    },
    getOne:function(req,res){


        const tasks=[
            function getSingleProduct(cb){
                productModel.findById(req.params.id,function(err,doc){
                    if(err){
                        res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
                    }else{
                        cb(null,{res:res.status(200).json({status:'success',message:'success',docs:doc})});
                    }
                })
            }
        ];

         
        async.waterfall(tasks,(err,results)=>{
            if(err){
                console.log(err);
            }
            if(results){
                console.log(results);
            }
        })
       
    },


    create:function(req,res){
            const tasks=[
                function first(cb){

                    var product=new productModel();
                    product.name=req.body.name;
                    product.price=req.body.price;
        
                    product.save(function(err){
                        if(err){
                            res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
                        }else{
                            cb(null,{res:res.status(200).json({status:'success',message:'Documents added successfully',docs:''})})
                        }
                    });

                }
            ];

            async.waterfall(tasks,(err,results)=>{
                if(err){
                    console.log(err);
                }
                if(results){
                    console.log(results);
                }
            })

           
    },

    update:function(req,res){


        productModel.findById(req.params.id,function(err,doc){
            if(err)
                res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});

           doc.name=req.body.name;
           doc.price=req.body.price;


           doc.save(function(err){
              if(err){
                    res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
                }
                else{
                    res.status(200).json({status:'success',message:'Document updated succesfully',docs:''});
             }
           });
        });

        // const tasks=[
        //         // function first(callback){

        //         //         productModel.findById(req.params.id,function(err,doc){
        //         //             if(err)
        //         //                 cb(null,{res:res.status(500).json({status:'error',message:'Database Error:'+err,docs:''})});
        //         //          }); 
        //         // },
        //         function second(cb){

        //             productModel.findById(req.params.id,function(err,doc){
        //                 if(err)
        //                     cb(null,{res:res.status(500).json({status:'error',message:'Database Error:'+err,docs:''})});
        //              }); 
        
        //             doc.name=req.body.name;
        //             doc.price=req.body.price;
        //             doc.save(function(err){
        //         if(err){
        //                 res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
        //               }
        //         else{
        //                 cb(null,{res:res.status(200).json({status:'success',message:'Document updated succesfully',docs:''})}) 
        //            }
        //          });
        //     }
        // ]
        
        // async.waterfall(tasks,(err,results)=>{
        //     if(err){
        //         console.log(err);
        //     }
        //     if(results){
        //         console.log(results);
        //     }
        // })
    },

        // productModel.findById(req.params.id,function(err,doc){
        //     if(err)
        //         res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});

        //    doc.name=req.body.name;
        //    doc.price=req.body.price;


        //    doc.save(function(err){
        //       if(err){
        //             res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
        //         }
        //         else{
        //             res.status(200).json({status:'success',message:'Document updated succesfully',docs:''});
        //      }
        //    });
        // });

    // without async
        // update:function(req,res){
        //     productModel.findById(req.params.id,function(err,doc){
        //         if(err)
        //             res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
    
        //        doc.name=req.body.name;
        //        doc.price=req.body.price;
    
    
        //        doc.save(function(err){
        //           if(err){
        //                 res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
        //             }
        //             else{
        //                 res.status(200).json({status:'success',message:'Document updated succesfully',docs:''});
        //          }
        //        });
        //     });
        // },    



    delete:function(req,res){

        const tasks=[
            function deleteProduct(cb){
                productModel.deleteOne({
                    _id:req.params.id
                },function(err){
                    if(err){
                        res.status(500).json({status:'error',message:'Database Error:'+err,docs:''});
                    }
                    else{
                       cb(null,{res: res.status(200).json({status:'success',message:'Document deleted successfully',docs:''})});
                 }
                });
            }
        ];

         
        async.waterfall(tasks,(err,results)=>{
            if(err){
                console.log(err);
            }
            if(results){
                console.log(results);
            }
        })

       
    }

};

module.exports=products;