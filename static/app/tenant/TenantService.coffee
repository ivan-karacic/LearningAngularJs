# CoffeeScript

administratorService = angular.module 'administratorService', ['ngResource']

administratorService.factory 'Tenant', ['$resource', ($resource) ->
    return $resource '../assets/data/tenant.json', {}, {
        query: {method: 'GET', params:{}, isArray: true}
    }
]

administratorService.factory 'Treeview', ['$resource', ($resource) ->
    return $resource '../assets/data/treeview.json', {}, {
        query: {method: 'GET', params:{}, isArray: true}
    }
]