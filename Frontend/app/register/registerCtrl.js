app.controller('registerCtrl',function($scope,$http,$location,$state,$uibModal){

    $scope.open=function(){
        $scope.datePickerOpened=true;
    }

    // $scope.datePickerOpened={
    //     opened:false
    // }

    $scope.format='dd-MMMM-yyyy';

    // $scope.items=['item1','item2','item3'];
    $scope.items=['AddProduct:To include your product in your list.','Edit:To update the product details','Delete: To remove product from the list.',"Sort:Rearrange your list according to name or price as per choice"];



    // $scope.submitForm=function(){
    //     console.log("Birth date"+$scope.birthDate)
    // }

    $scope.submitForm = function(isValid) {
 
      // check to make sure the form is completely valid
      if (isValid) { 
          alert('Successfully Registered');
      }
  };
    
  $scope.openModal = function () {

    var modalInstance = $uibModal.open({
      ariaLabelledBy:'modal-title',
      ariaDescribedBy:'modal-body',
      templateUrl: 'app/register/modal.html',
      controller: 'modalCtrl',
      controllerAs:'$ctrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
    //   $ctrl.selected = selectedItem;
    // alert(selectedItem);
    }, function () {
    //   $log.info('Modal dismissed at: ' + new Date());
        // alert("dismissed")
    });
  };

  $scope.gotoLogin=function(){
    // var name=document.getElementById('firstname').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    // localStorage.setItem('firstname',name);
    localStorage.setItem('userEmail',email);
    localStorage.setItem('userPassword',password);

    $state.go('login')
  }

})