'use strict';

angular.module('brustib.times', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/times', {
    templateUrl: 'times/times.html',
    controller: 'TimesCtrl'
  });
}])

.controller('TimesCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('http://m.stib.be/api/getwaitingtimes.php?1=1&line=92&mode=M&iti=2&halt=6420&lang=en').success(function(data){
    console.log(data);
    $scope.times = data;
  });

}]);