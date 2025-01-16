'use strict';

// Declare app level module which depends on views, and core components
angular.module('newsUpdatesApp', [
  'ngRoute'
])
.config(function($locationProvider, $routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "app/pages/main.html"
  })
  .when("/card", {
    templateUrl: "app/pages/card.html"
  })

  $locationProvider.html5Mode({
    enabled:true,
    requireBase:false
  });
  
})
app.directive("navbar" ,() =>{
    return{
        restrict: 'E',
        templateUrl:"app/pages/navbar.html"
    }
})
app.directive("search" ,() =>{
    return{
        restrict: 'E',
        templateUrl:"Components/searchBar/searchBar.html"
    }
})