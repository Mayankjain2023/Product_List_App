app.controller('loginCtrl',function($scope,$http,$location,$state){

    console.log("Logging...in")



    $scope.gotoProducts=function(){
        
        var enterEmail=document.getElementById('userName').value;
        var enterPassword=document.getElementById('password').value;

        var getEmail=localStorage.getItem('userEmail');
        var getPassword=localStorage.getItem('userPassword');

        if(enterEmail===getEmail){
            if(enterPassword===getPassword){
                alert('Login successful')
                    $state.go("dashboard.home");
            }else{
                alert("Wrong Password")
            }   
        }else{
            alert("Unregistered email")
        }


    }
    $scope.gotoRegister=function(){
        $state.go('register')
    }

    // $scope.submitForm = function(isValid) {
 
    //     // check to make sure the form is completely valid
    //     if (isValid) { 
    //         alert('Login Form is valid');
    //     }
    // };
})