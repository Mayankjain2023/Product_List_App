app.controller('editProductCtrl',function($scope,$http,$stateParams,$state,ngToast){

    $scope.getProduct=function(){

        $http({
            method:"GET",
            url:"http://localhost:8080/myapi/product/"+ $stateParams.productId,
        })
        .then(function mysuccess(response){
            $scope.product=response.data.docs;
            console.log(response);
        },function myError(response){
            console.log(response);
        });
    }

    $scope.updateProduct=function(){

        console.log('updating product')

        $http({
            method:"PUT",
            url:"http://localhost:8080/myapi/product/"+$stateParams.productId,
            data:$scope.product
        })
        .then(function mysuccess(response){
            ngToast.create({
                className:'success',
                content:response.data.message,
                dismissButton:true
            })
            $state.go("dashboard.products")
            
        },function myError(response){
            console.log(response);
        });
    }




    

})