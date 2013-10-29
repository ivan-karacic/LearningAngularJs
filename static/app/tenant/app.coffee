# CoffeeScript

administratorApp = angular.module 'administratorApp', [
    'ngRoute',
    'administratorController',
    'administratorService'
]


###
administratorApp.config ['$routeProvider', ($routeProvider) -> 
    $routeProvider.when '/', {templateUrl: 'partials/home.html'}]
###