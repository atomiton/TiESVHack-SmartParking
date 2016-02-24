angular.module( 'ngBoilerplate.tracking', [
  'ui.router',
  'plusOne',
  'ngMap'
])

.run(function($rootScope, NgMap) {
  NgMap.getMap().then(function(map) {
    $rootScope.map = map;
  });
})

.config(function config( $stateProvider ) {
  $stateProvider.state( 'tracking', {
    url: '/tracking',
    views: {
      "main": {
        controller: 'TrackingCtrl',
        templateUrl: 'Tracking/tracking.tpl.html'
      }
    },
    data:{ pageTitle: 'Tracking' }
  });
})

.controller( 'TrackingCtrl', function TrackingController( $scope, $rootScope, dashboardFactory, NgMap) {
  dashboardFactory.getAllParkingLots().then(function(data){
    $scope.parkingLots = data.Find.Result;
  });

  dashboardFactory.getAllDrivers().then(function(data){
    $scope.drivers = data.Find.Result;
  });

});
