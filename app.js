let app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $http) =>{
    $scope.dishes = [{
            name:'Loading',
            price: 'Loading',
        }];
    $http.get("http://localhost:3500/")
     .then(response => {
         $scope.dishes = response.data;
     })
})