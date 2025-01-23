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



var app = angular.module('newsUpdatesApp', ['ngRoute','navbar']);

app.config(function ($routeProvider, $locationProvider) {
  
  $locationProvider.html5Mode({
    enabled: true,   
    requireBase: false 
  });

  
  $routeProvider
  .when('/nav', {
    templateUrl: 'newsupdates/Components/nav/nav.html',
    controller: 'navbar',
  })
    .when('/bussinessheadlines', {
      templateUrl: 'newsupdates/Components/businessheadlines/businessheadlines.html',
      controller: 'NewsController',
    })
    .when('/weather', {
      templateUrl: 'newsupdates/Components/weather/weather.html',
      controller: 'WeatherController',
  })
  .when('/nav', {
    templateUrl: 'newsupdates/Components/currentnews/currentnews.html', // Use the component directly in the template
    controller:'CurrentNewsController',
  })
  .when('/sportsnews', {
    templateUrl: 'newsupdates/Components/sportsnews/sportsnews.html',
    controller: 'sportsController',
  })
  .when('/technology', {
    templateUrl: 'newsupdates/Components/technologynews/technologynews.html',
    controller: 'TechnologyController', // Technology controller for the new module
  })
  .when('/bookmarks', {
    templateUrl: 'newsupdates/Components/bookmarks/bookmarks.html',
    controller: 'BookmarksController',
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
      redirectTo: '/nav',
    });
});