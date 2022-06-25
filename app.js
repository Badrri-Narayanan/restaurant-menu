let app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $http) =>{
    $scope.dishes = [{
            name:'Loading',
            price: 'Loading',
        }];
    $http.get("https://face-detector-api-golang.herokuapp.com/restaurant_menu")
     .then(response => {
         $scope.dishes = response.data;
     })
})
