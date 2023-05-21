app.controller('allProductsCtrl',function($scope,$http,$location,httpService,NgTableParams,SweetAlert){

scope=$scope;

        $scope.getProducts=function(){

           
            httpService.get("myapi/products/").then(function mysuccess(response){
                $scope.products=response.data.docs;

                $scope.tableParams=new NgTableParams({},{dataset:$scope.products});
                
                console.log(response);
                },function myError(response){
                    console.log(response);
                });
             }



            $scope.deleteProduct=function(productId){

                console.log('deleting product')

                SweetAlert.swal({
                    title:"Are your sure?",
                    text:"Your product will be permanently deleted!",
                    type:"warning",
                    showCancelButton:true,
                    confirmButtonColor:"#DD6B55",
                    confirmButtonText:"Yes,delete it",
                    cancelButtonText:"No,cancel it",
                    closeOnConfirm:false,
                    closeOnCancel:false,
                    },
                    function(isConfirm){
                        if(isConfirm){

                            httpService.delete("myapi/product/"+productId).then(function mysuccess(response){
                    
                                console.log(response);

                                $scope.getProducts();
                                SweetAlert.swal("Deleted!",response.data.message,"success");
                                    },function myError(response){
                                        console.log(response);
                                    });
                        }else{
                            SweetAlert.swal("Cancelled","Your record is safe :)","error");
                        }
                    
                    });
            }

        // ng-table
        // var self=this;
        

})