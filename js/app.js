var app = angular.module('app', []);

app.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: '/partials/game-list.html',
                controller: 'MainCtrl'
            })
        .otherwise({ redirectTo: '/' });
});

app.factory('simpleFactory', function() {
    var factory = {};
    return factory;
});

app.controller('MainCtrl', function($scope, simpleFactory) {

});


