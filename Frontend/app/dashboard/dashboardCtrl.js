app.controller('dashboardCtrl',function($scope,$http,$location,$state){

   console.log("dashboard")
   var time=new Date();
   $scope.currentTime=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
});