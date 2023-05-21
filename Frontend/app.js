var API_URL="http://localhost:8080/";
var app = angular.module("myApp", ["ngTouch","ngSanitize","ngAnimate","ui.bootstrap","ui.router","ui.mask","ngTable",
"oitozero.ngSweetAlert","ngToast"]);




app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("login");
    $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'app/login/login.html',
                controller:'loginCtrl'
            })
            .state('register',{
                url:'/register',
                templateUrl:'app/register/register.html',
                controller:'registerCtrl'
            })
            .state('dashboard',{
                url:'/dashboard',
                templateUrl:'app/dashboard/dashboard.html',
                controller:'dashboardCtrl',
                abstract:true
            })
            .state('dashboard.home',{
                url:'/home',
                templateUrl:'app/home/home.html',
                controller:'homeCtrl',
            })
            .state('dashboard.products',{
                url:'/products',
                templateUrl:"app/products/allProduct.html",
                controller:"allProductsCtrl"
            })
            .state('dashboard.addProduct',{
                url:'/add-product',
                templateUrl:"app/products/addProduct.html",
                controller:"addProductCtrl"
            })
            .state('dashboard.editProduct',{
                url:'/edit-product/:productId',
                templateUrl:"app/products/editProduct.html",
                controller:"editProductCtrl"
            })
            // .state('login',{
            //     url:'/login',
            //     templateUrl:'a',
            //     controller:'loginCtrl'
            // })
            // .state('login',{
            //     url:'/login',
            //     templateUrl:'a',
            //     controller:'loginCtrl'
            // })
});


// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/add",{
//         templateUrl:"app/products/addProduct.html",
//         controller:"addProductCtrl"
//     })
//     .when("/edit/:productId",{
//         templateUrl:"app/products/editProduct.html",
//         controller:"editProductCtrl"
//     })
//     .otherwise({
//         templateUrl:"app/products/allProduct.html",
//         controller:"allProductsCtrl"
//     });
// });
