app.controller('TechnologyController', ['$scope', '$http', function($scope, $http) {
    $scope.loading = true;
    $scope.error = null;
    $scope.articles = [];
    $scope.bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || []; // Load from localStorage

    const apiKey = '8e192d77108f47b5b37ff9f372260d66'; // NewsAPI key for technology news
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;

    // Fetching technology news articles
    $http.get(apiUrl)
        .then(function(response) {
            if (response.data.articles && response.data.articles.length) {
                $scope.articles = response.data.articles;
            } else {
                $scope.error = 'No articles available at the moment.';
            }
        })
        .catch(function(error) {
            $scope.error = 'Failed to fetch news. Please try again later.';
            console.error('Error fetching data:', error);
        })
        .finally(function() {
            $scope.loading = false;
        });


}]);
