// 'use strict';

// Declare app level module which depends on views, and core components
// var app=angular.module('newsUpdatesApp', [
//   'ngRoute'
// ])
// .config(function($locationProvider, $routeProvider) {
//   $routeProvider
//   .when("/", {
//     templateUrl: "newsupdates/app/pages/main.html"
//   })
//   .when("/card", {
//     templateUrl: "newsupdates/app/pages/card.html"
//   }).when("/search"){
//     templateUrl: "Components/searchbar/search.js",

//   }

//   $locationProvider.html5Mode({
//     enabled:true,
//     requireBase:false
//   });
  
// })
// app.directive("navbar" ,() =>{
//     return{
//         restrict: 'E',
//         templateUrl:"app/pages/navbar.html"
//     }
// })
// app.directive("search" ,() =>{
//     return{
//         restrict: 'E',
//         templateUrl:"Components/searchBar/searchBar.html"
//     }
// })



var app = angular.module('newsUpdatesApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  // Enable HTML5 Mode (no hash in URL)
  $locationProvider.html5Mode({
    enabled: true,   // Enable HTML5 Mode
    requireBase: false // Disable base tag requirement
  });

  // Define the routes
  $routeProvider
    .when('/login', {
      templateUrl: 'newsupdates/Components/businessheadlines/businessheadlines.html',
      controller: 'NewsController',
    })
    // .when('/register', {
    //   templateUrl: 'components/register/register.html',
    //   controller: 'RegisterController',
    // })
    // .when('/home', {
    //   templateUrl: 'components/home/home.html',
    //   controller: 'HomeController',
    // })
    .otherwise({
      redirectTo: '/login',
    });
});