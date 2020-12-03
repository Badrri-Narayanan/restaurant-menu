let app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $http) =>{
    $scope.dishes = [{
            name:'Loading',
            price: 'Loading',
        }];
    $http.get("https://restaurant-springboot.herokuapp.com/")
     .then(response => {
         $scope.dishes = response.data;
     })
})
