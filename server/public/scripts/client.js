console.log('javascript is loaded');

var app = angular.module('starWarsApp', []);

app.controller('starWarsController', ['$http', function($http){
  console.log('starWarsController loaded');

    var self = this;
    self.message = 'Coding we are';

    $http({
        method: 'GET',
        url: 'https://swapi.co/api/planets/4/?format=wookiee'
    }).then(function (response) {
        console.log(response.data);
    }).catch(function(error) {
        console.log('The force was not with us', error);
    })
}]);
