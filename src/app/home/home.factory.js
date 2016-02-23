angular.module( 'ngBoilerplate.home')
.factory('dashboardFactory', function($http){
	var url = "http://localhost:8080/fid-parkingmanagement";

	return{
		getAllParkingLots : getAllParkingLots,
		getAllDrivers : getAllDrivers,
		getOperatorDetails : getOperatorDetails,
		getParkingSpots : getParkingSpots,
		setDayPrice : setDayPrice,
		saveParkingLotInfoInCityParkingApp : saveParkingLotInfoInCityParkingApp,
		getLotInfo : getLotInfo
	};

	function getLotInfo(LotID){
		var data = "<find><ParkingLot><LotID>"+LotID+"</LotID></ParkingLot></find>";

		return $http.post(url, data).then(function (response) {
            var x2js = new X2JS();
            var jsonObj = x2js.xml_str2json(response.data);
            return jsonObj;
        });
	}

	function saveParkingLotInfoInCityParkingApp(LotID, OperatorID, Lat, Lon, DayPrice, Vacancies){
		var data = "<saveParkingLotInfo><LotID>"+LotID+"</LotID><OperatorID>"+OperatorID+"</OperatorID><Latitude>"+Lat+"</Latitude><Longitude>"+Lon+"</Longitude><TodaysPrice>"+DayPrice+"</TodaysPrice><CurrentVacancies>"+Vacancies+"</CurrentVacancies></saveParkingLotInfo>";

		return $http.post(url, data).then(function (response) {
            var x2js = new X2JS();
            var jsonObj = x2js.xml_str2json(response.data);
            return jsonObj;
        });
	}

	function setDayPrice(OperatorID, LotOnePrice, LotTwoPrice){
		var data = "<updatePriceByParkingLotOperator><OperatorID>"+OperatorID+"</OperatorID><LotOnePrice>"+LotOnePrice+"</LotOnePrice><LotTwoPrice>"+LotTwoPrice+"</LotTwoPrice></updatePriceByParkingLotOperator>";

		return $http.post(url, data).then(function (response) {
            var x2js = new X2JS();
            var jsonObj = x2js.xml_str2json(response.data);
            return jsonObj;
        });
	}

	function getParkingSpots(LotID){
		var data = "<find><ParkingSpot><LotID>"+LotID+"</LotID></ParkingSpot></find>";

		return $http.post(url, data).then(function (response) {
            var x2js = new X2JS();
            var jsonObj = x2js.xml_str2json(response.data);
            return jsonObj;
        });
	}

	function getOperatorDetails(OperatorID){
		var data = "<find><ParkingLotOperator><OperatorID>"+OperatorID+"</OperatorID></ParkingLotOperator></find>";

		return $http.post(url, data).then(function (response) {
            var x2js = new X2JS();
            var jsonObj = x2js.xml_str2json(response.data);
            return jsonObj;
        });
	}

	function getAllParkingLots(){

        var data = "<Query><Find><ParkingLot><LotID><ne></ne></LotID></ParkingLot></Find></Query>";

        return $http.post(url, data).then(function (response) {
            var x2js = new X2JS();
            var jsonObj = x2js.xml_str2json(response.data);
            return jsonObj;
        });
	}

	function getAllDrivers(){
		var data = "<Query><Find><Driver><Id><ne></ne></Id></Driver></Find></Query>";

		return $http.post(url, data).then(function (response) {
            var x2js = new X2JS();
            var jsonObj = x2js.xml_str2json(response.data);
            return jsonObj;
        });
	}
});