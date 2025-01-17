angular.module('navbar', [])
.component('navbar', {
    templateUrl: './Components/navbar/navbar.html',
    controller: function ($scope, $location) {
        console.log('Navbar component initialized');
    }
});