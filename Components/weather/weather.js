app.controller('WeatherController', ['$scope', '$http', function ($scope, $http) {
    $scope.loading = true;
    $scope.error = null;
    $scope.weather = {};

    const apiKey = '8175a36e790ac24d13eed9a6c6419fa2'; 
    const city = 'Jabalpur'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    $http.get(apiUrl)
        .then(function (response) {
            const data = response.data;
            $scope.weather = {
                location: `${data.name}, ${data.sys.country}`,
                temperature: data.main.temp,
                condition: data.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            };
        })
        .catch(function (error) {
            $scope.error = 'Unable to fetch weather data.';
            console.error('Weather API Error:', error);
        })
        .finally(function () {
            $scope.loading = false;
        });
}]);
