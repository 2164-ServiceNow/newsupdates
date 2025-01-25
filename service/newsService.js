angular.module('newsUpdatesApp')
.factory('NewsService', function ($http) {
    var API_KEY = '99a0c61e284c45cc9cff45cbdb9b268b';  // Use your own API key from NewsAPI

    return {
        searchNews: function (query) {
            var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
            return $http.get(url);  // Fetch data from the API
        }
    };
});
