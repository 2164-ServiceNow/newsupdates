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
    templateUrl: 'newsupdates/Components/navbar/navbar.html',
    controller: 'navbar',
  })
    .when('/bussinessheadlines', {
      templateUrl: './Components/businessheadlines/businessheadlines.html',
      controller: 'NewsController',
    })
    .when('/weather', {
      templateUrl: './Components/weather/weather.html',
      controller: 'WeatherController',
  })
  .when('/nav', {
    templateUrl: './Components/currentnews/currentnews.html', // Use the component directly in the template
    controller:'CurrentNewsController',
  })
  .when('/sportsnews', {
    templateUrl: './Components/sportsnews/sportsnews.html',
    controller: 'sportsController',
  })
  .when('/technology', {
    templateUrl: './Components/technologynews/technologynews.html',
    controller: 'TechnologyController', // Technology controller for the new module
  })
  .when('/bookmarks', {
    templateUrl: 'Components/bookmarks/bookmarks.html',
    controller: 'BookmarksController',
})
.when('/search', {
  templateUrl: './Components/search.html', // This is where search results will be displayed
  controller: 'SearchController',  // This controller will handle the search logic
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