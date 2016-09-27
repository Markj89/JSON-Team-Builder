var app = angular.module('MyApp', []);

app.filter('unique', function() {
  return function(collection, keyname) {
    var output = [],
      keys = [];

    angular.forEach(collection, function(team) {
      var key = team[keyname];
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(team);
      }
    });
    return output;
  };
});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

  $scope.team = [{}];
  $scope.employees = [{}];
  $scope.employeeRecord = true;

  $scope.additionalEmployees = true;
  $scope.removeEmployee = false;
  $scope.addEmployee = function() {
    if ($scope.employees.length < 10) {
      $scope.employees.push({});
      $scope.removeButton = true;
    } else {
      return false;
    }
  };
  $scope.removeEmployee = function(index) {
    $scope.employees.splice(-1, 1);
    if ($scope.employeeRecord.length < 2) {
      $scope.additionalEmployees = true;
    }
  };
  $scope.team = angular.extend($scope.employees);
}]);