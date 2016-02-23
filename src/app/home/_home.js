angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne',
  'nvd3',
  'rzModule'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, $rootScope, dashboardFactory, $interval ) {

  $scope.formData = {};

  $scope.formData.oprator = "KIYL24FFAAAH6AAAAF7ARFDI";

  $scope.selectedOperator = {};

  
  $scope.setDayPrice = function(){
    if($scope.vClockDate.getHours() >= 8){
      alert("Price must be set before 8 AM");
      $scope.getOperatorDetails();
      return;
    }
    dashboardFactory.setDayPrice($scope.selectedOperator.OperatorID, $scope.lot1Slider.value, $scope.lot2Slider.value).then(function(){
      $scope.getOperatorDetails();
    });
  };

  $scope.saveParkingLotInfoInCityParkingApp = function(){
    dashboardFactory.getLotInfo($scope.selectedOperator.LotID1).then(function(lotInfo){
      // console.debug(lotInfo);

      dashboardFactory.saveParkingLotInfoInCityParkingApp(lotInfo.Find.Result.ParkingLot.LotID, $scope.selectedOperator.OperatorID, lotInfo.Find.Result.ParkingLot.LotLocation.Latitude, lotInfo.Find.Result.ParkingLot.LotLocation.Longitude, $scope.lot1Slider.value, "50").then(function(saveResp){
        console.debug("save lot info");
      });
    });

    dashboardFactory.getLotInfo($scope.selectedOperator.LotID2).then(function(lotInfo){
      // console.debug(lotInfo);

      dashboardFactory.saveParkingLotInfoInCityParkingApp(lotInfo.Find.Result.ParkingLot.LotID, $scope.selectedOperator.OperatorID, lotInfo.Find.Result.ParkingLot.LotLocation.Latitude, lotInfo.Find.Result.ParkingLot.LotLocation.Longitude, $scope.lot2Slider.value, "50").then(function(saveResp){
        console.debug("save lot info");
      });
    });
    
  };

  var saveLotInfoToCityParkingApp = $interval(function() {
    $scope.saveParkingLotInfoInCityParkingApp();
  }, 1000 * 60 * 5);

  $scope.setSliderValues = function(){
    
    $scope.lot1Price = $scope.selectedOperator.LotOnePrice == '0E-10' ? 0 : $scope.selectedOperator.LotOnePrice;
    $scope.lot2Price = $scope.selectedOperator.LotTwoPrice == '0E-10' ? 0 : $scope.selectedOperator.LotTwoPrice;

    $scope.lot1Slider = {
        value : parseInt($scope.lot1Price,10),
        options:{
          floor:0,
          ceil:20,
          onEnd : function(){
            $scope.setDayPrice();
          }
        }
      };

      $scope.lot2Slider = {
        value : parseInt($scope.lot2Price,10),
        options:{
          floor:0,
          ceil:20,
          onEnd : function(){
            $scope.setDayPrice();
          }
        }
      };
  };

  $scope.lot1Slots = [];
  $scope.lot2Slots = [];

  $scope.getOperatorDetails = function(){
    dashboardFactory.getOperatorDetails($scope.formData.oprator).then(function(resp){
      $scope.selectedOperator = resp.Find.Result.ParkingLotOperator;

      $scope.setSliderValues();

      dashboardFactory.getParkingSpots($scope.selectedOperator.LotID1).then(function(data){
        $scope.lot1Slots = data.Find.Result;
      });

      dashboardFactory.getParkingSpots($scope.selectedOperator.LotID2).then(function(data){
        $scope.lot2Slots = data.Find.Result;
      });
    });  
  };

  $scope.getOperatorDetails();
  
  $scope.opratorChanged = function(value) {
       $scope.getOperatorDetails();
  };

  $scope.subscribeToVClock = function(){
      if (!window.WebSocket) {
          window.WebSocket = window.MozWebSocket;
      }
      ws = new window.WebSocket("ws://localhost:8080/fid-parkingmanagementws");
      ws.onopen = function () {
          // Web Socket is connected, send data using send()
          console.log("ws open");
          var subQuery = "<Query Storage='TqlSubscription'><Save><TqlSubscription Label='TiEClock' sid='11'><Topic>parkingmanagement.management.VirtualClock.*</Topic></TqlSubscription></Save></Query>";
          ws.send(subQuery);
      };
      ws.onmessage = function (e) {
          var server_message = e.data;
          window.queryResultStack += server_message + "\n\n";
          $scope.result = window.queryResultStack;
          $scope.$apply();
          
          // console.debug("Notification from server...");
          // console.debug(server_message);
          var x2js = new X2JS();
          var jsonObj = x2js.xml_str2json(e.data);
          angular.forEach(jsonObj.TqlNotification.Update, function(obj, key){
            angular.forEach(obj, function(notificationObj, index){

              $scope.vClockDate = new Date(notificationObj._Timestamp*1000);

            });
          });
      };
    };

    $scope.subscribeToVClock();

});
