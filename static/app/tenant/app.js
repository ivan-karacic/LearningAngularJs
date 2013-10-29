(function() {
  var administratorApp;



  administratorApp = angular.module('administratorApp', ['ngRoute', 'administratorController', 'administratorService']);

  administratorApp.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'tenant/partials/assets.html',
        controller: 'LoadTenantCtrl'
      });
    }
  ]);

}).call(this);
