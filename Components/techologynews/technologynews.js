

app.controller('myController', ['$scope', '$http', function ($scope, $http) {
    var url = 'https://technology-news3.p.rapidapi.com/news';
    var headers = {
        'x-rapidapi-key': 'e3cfbd3727msha521ea72ea93088p1923b2jsn345736a1bf7b',
        'x-rapidapi-host': 'technology-news3.p.rapidapi.com'
    };

    // Fetch data from the API
    $http({
        method: 'GET',
        url: url,
        headers: headers
    }).then(function successCallback(response) {
        // On successful response
        console.log(response.data);
        $scope.newsData = response.data; // Bind data to scope for use in view
    }, function errorCallback(error) {
        // On error response
        console.error(error);
    });
}]);
