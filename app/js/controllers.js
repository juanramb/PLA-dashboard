'use strict';

/* Controllers */

angular.module('PLADash.controllers', [])
  .controller('DashboardCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.show={}
    $scope.show.menu=true;
    $scope.show.groups=$scope.show.alumns=$scope.show.filters=$scope.show.logs=false;
    switch($location.path()){
      case '/alumns':
        $scope.show.alumns=true;
        $scope.show.menu=false;
        break;
      case '/groups':
        $scope.show.groups=true;
        $scope.show.menu=false;
        break;
      case '/logs':
        $scope.show.logs=true;
        $scope.show.menu=false;
        break;
      case '/filters':
        $scope.show.filters=true;
        $scope.show.menu=false;
        break;
    }
    $scope.toggleMenu = function(change){
      $scope.show=_.extend($scope.show,change);
      console.dir($scope.show)
      if ($scope.show.menu)
        $location.path('/');
      if ($scope.show.alumns)
        $location.path('/alumns');
      if ($scope.show.groups)
        $location.path('/groups');
      if ($scope.show.filters)
        $location.path('/filters');
      if ($scope.show.logs)
        $location.path('/logs');
    }

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
