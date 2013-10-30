# CoffeeScript

administratorController = angular.module 'administratorController', []

administratorController.controller 'LoadTenantCtrl', ['$scope', 'Tenant', 
 ($scope, Tenant) -> 
    $scope.tenant = Tenant.query()
]