// var app = angular.module('sportsApp', []);

app.controller('sportsController', function($scope, $http) {
    const url = 'https://sportsdaily.p.rapidapi.com/api/sports/news/?page=1&page_size=5';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e3cfbd3727msha521ea72ea93088p1923b2jsn345736a1bf7b',
            'x-rapidapi-host': 'sportsdaily.p.rapidapi.com'
        }
    };

    $http.get(url, options).then(function(response) {
        $scope.sportsNews = response.data.results;
    }).catch(function(error) {
        console.error(error);
    });
});
