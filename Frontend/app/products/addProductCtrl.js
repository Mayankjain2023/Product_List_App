app.controller('addProductCtrl',function($scope,$http,$location,$state,httpService,SweetAlert){
    $scope.saveProduct=function(){
        console.log('saving product')
        
        var data={"name":$scope.name,"price":$scope.price}

        httpService.post("myapi/product/",data).then(function mysuccess(response){
            // alert(response.data.message)
            SweetAlert.swal("Product added successfully");
            // console.log(response);
            $state.go("dashboard.products")
            
        },function myError(response){
            console.log(response);
        });
    }
});