# CoffeeScript
administratorController = angular.module 'administratorController', ['kendo.directives']

administratorController.controller 'LoadTenantCtrl', ['$scope', 'Tenant', 'Treeview'
 ($scope, Tenant,Treeview) -> 
    $scope.tenant = Tenant.query()
    something = Treeview.query()
    $scope.things = {
        dataSource: {
          data: [{ name: "Unit 1", id: 1 },
                 { name: "Unit 2", id: 2 },
                 { name: "Unit 3", id: 3 , items: 
                    [{ name: "Team 1", id: 1 },
                     { name: "Team 2", id: 2 },
                     { name: "Team 3", id: 3, items: 
                         [{ name: "Team 1", id: 1 },
                          { name: "Team 2", id: 2 },
                          { name: "Team 3", id: 3 }] }]}]
        },
        dataTextField: 'name',
        schema:
            model:
                children: 'items'
    }
]

#TenantTreeItem = kendo.model.define
#    id: "Id",
#    fields:{
#        Id: {
#        
#        },
#        Name: {      
#        
#        },
#        Children: {      
#            type: TenantTreeItem
#        }
#    }