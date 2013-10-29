(function() {
  var administratorController;



  administratorController = angular.module('administratorController', []);

  administratorController.controller('LoadTenantCtrl', [
    '$scope', 'Tenant', function($scope, Tenant) {
      return $scope.tenant = Tenant.query();
    }
  ]);

}).call(this);
