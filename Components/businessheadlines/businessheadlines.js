// var app = angular.module('newsApp', []);

app.controller('NewsController', ['$scope', '$http', function($scope, $http) {
    $scope.loading = true;
    $scope.error = null;
    $scope.articles = [];

    // Replace the API key below with your own
    const apiKey = '8e192d77108f47b5b37ff9f372260d66';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

    $http.get(apiUrl)
        .then(function(response) {
            console.log(response.data);
            $scope.articles = response.data.articles;
            console.log($scope.articles);
        })
        .catch(function(error) {
            $scope.error = 'Failed to fetch news. Please try again.';
            console.error('Error fetching data:', error);
        })
        .finally(function() {
            $scope.loading = false;
        });
}]);
