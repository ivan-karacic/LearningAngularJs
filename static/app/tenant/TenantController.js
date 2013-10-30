(function() {
  var administratorController, populate;

  administratorController = angular.module('administratorController', []);

  administratorController.controller('LoadTenantCtrl', [
    '$scope', 'Tenant', 'Treeview', function($scope, Tenant, Treeview) {
      return $scope.tenant = Tenant.query();
    }
  ]);

  populate = function() {
    var tree;
    tree = new kendo.data.HierarchicalDataSource({
      data: [
        {
          TenantTreeItem: [
            {
              Id: "i1",
              AspireTreeItemType: "Unit",
              Name: "Service Clientele",
              TreeItemImageType: "Folder",
              IdItem: "58294c46-4711-4c78-943b-72f5f411fb26",
              Children: [
                {
                  TenantTreeItem: [
                    {
                      Id: "i3",
                      AspireTreeItemType: "Team",
                      Name: "Equipe A",
                      TreeItemImageType: "Team",
                      IdItem: "12128563-48c8-4d64-8649-8974b7ac8be6",
                      Children: [
                        {
                          TenantTreeItem: [
                            {
                              Id: "i4",
                              AspireTreeItemType: "Agent",
                              ManagerOrAgentId: "39143343-2474-4ae2-8f05-8651393a22d0",
                              Name: "Agent  1",
                              TreeItemImageType: "Agent",
                              IdItem: "258c1862-4358-42c5-9755-94aacd393a31"
                            }, {
                              Id: "i5",
                              AspireTreeItemType: "Agent",
                              ManagerOrAgentId: "117cd119-37ff-4809-807f-12029a148cde",
                              Name: "Agent  2",
                              TreeItemImageType: "Agent",
                              IdItem: "8ba3c71b-007d-4bfc-a5e9-54a70144548f"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
    return {
      schema: {
        model: {
          children: "Children"
        }
      }
    };
  };

  $('#tenant-treeview').kendoTreeView({
    dataSource: tree,
    dataTextField: ["Name"]
  });

}).call(this);
