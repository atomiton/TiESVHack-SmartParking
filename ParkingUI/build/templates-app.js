angular.module('templates-app', ['Tracking/tracking.tpl.html', 'home/home.tpl.html', 'reports/reports.tpl.html']);

angular.module("Tracking/tracking.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Tracking/tracking.tpl.html",
    "<style>\n" +
    "  .ng-map-info-window {\n" +
    "    background-color: navy;\n" +
    "    color: #fff;\n" +
    "  }\n" +
    "  .ng-map-info-window div:first-child > div:nth-child(1) {\n" +
    "    border-top-color: navy !important;\n" +
    "  }\n" +
    "  .ng-map-info-window div:first-child > div:nth-child(3) div {\n" +
    "    background-color: transparent !important;\n" +
    "  }\n" +
    "  .ng-map-info-window div:first-child > div:nth-child(4) {\n" +
    "    background-color: transparent !important;\n" +
    "  }\n" +
    "</style>\n" +
    "<div class=\"row dashboard-cont\">\n" +
    "	<div>\n" +
    "		<div><h3>Parking Lots</h3></div>\n" +
    "		<ng-map default-style=\"true\" center=\"{{parkingLots[0].ParkingLot.LotLocation.Latitude}},{{parkingLots[0].ParkingLot.LotLocation.Longitude}}\" zoom=\"14\" style=\"height:100%;\">\n" +
    "	      <marker position=\"{{lot.ParkingLot.LotLocation.Latitude}},{{lot.ParkingLot.LotLocation.Longitude}}\"\n" +
    "	        on-click=\"map.showInfoWindow('bar')\" ng-repeat=\"lot in parkingLots\">\n" +
    "	      </marker>\n" +
    "	      <info-window id=\"bar\">\n" +
    "	        <div ng-non-bindable>\n" +
    "	          <div id=\"siteNotice\"></div>\n" +
    "	          <div id=\"bodyContent\">\n" +
    "	            <p>Info window</p>\n" +
    "	          </div>\n" +
    "	        </div>\n" +
    "	      </info-window>\n" +
    "	    </ng-map>\n" +
    "	</div>\n" +
    "	<div>\n" +
    "		<div><h3>Drivers</h3></div>\n" +
    "		<ng-map default-style=\"true\" center=\"{{drivers[0].Driver.HomeLocation.Latitude}},{{drivers[0].Driver.HomeLocation.Longitude}}\" zoom=\"14\" style=\"height:100%;\">\n" +
    "	      <marker position=\"{{driver.Driver.HomeLocation.Latitude}},{{driver.Driver.HomeLocation.Longitude}}\"\n" +
    "	        on-click=\"map.showInfoWindow('bar')\" ng-repeat=\"driver in drivers\">\n" +
    "	      </marker>\n" +
    "	      <info-window id=\"bar\">\n" +
    "	        <div ng-non-bindable>\n" +
    "	          <div id=\"siteNotice\"></div>\n" +
    "	          <div id=\"bodyContent\">\n" +
    "	            <p>Info window</p>\n" +
    "	          </div>\n" +
    "	        </div>\n" +
    "	      </info-window>\n" +
    "	    </ng-map>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"dashboard-cont\">\n" +
    "  <div class=\"row\">\n" +
    "    <h3 class=\"blink_me text-center\" style=\"color:red;\">{{vClockDate | date:'medium'}}</h3>\n" +
    "    <button style=\"float:right; height: 30px; background:#1f252e; color: #fff; padding: 5px 10px; border:0; float:right; margin: 0 10px;\" ng-click=\"saveParkingLotInfoInCityParkingApp()\">Post ParkingLotInfo to OperatorApp Now</button>\n" +
    "    <button style=\"float:right; height: 30px; background:green; color: #fff; padding: 5px 10px; border:0; float:right; margin: 0 10px;\" ng-click=\"saveParkingLotInfoInCityParkingApp()\">Post ParkingLotInfo to CityParkingApp Now</button>\n" +
    "    <span style=\"font-weight:bold; color:blue; float:right; margin: 5px 20px;\">* Posting parking lot info to City Parking App every 5 minutes</span>\n" +
    "  </div>\n" +
    "  <hr/>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\" style=\"font-size:14px;\">\n" +
    "      <h3>Select Operator</h3>\n" +
    "      <div class=\"form-group\">\n" +
    "          <div class=\"radio\">\n" +
    "              <label>\n" +
    "                  <input type=\"radio\" name=\"op\" value=\"KIYL24FFAAAH6AAAAF7ARFDI\" ng-model=\"formData.oprator\" ng-change=\"opratorChanged('KIYL24FFAAAH6AAAAF7ARFDI')\">\n" +
    "                  KIYL24FFAAAH6AAAAF7ARFDI\n" +
    "              </label>\n" +
    "          </div>\n" +
    "          <div class=\"radio\">\n" +
    "              <label>\n" +
    "                  <input type=\"radio\" name=\"op\" value=\"KIYPD5Y5AAAH6AAAAGARD7GA\" ng-model=\"formData.oprator\" ng-change=\"opratorChanged('KIYPD5Y5AAAH6AAAAGARD7GA')\">\n" +
    "                  KIYPD5Y5AAAH6AAAAGARD7GA\n" +
    "              </label>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <h3>Operator Details</h3>\n" +
    "      <p><strong>Loyalty Credit: </strong>{{selectedOperator.LoyaltyCredit == '0E-10' ? 0 : selectedOperator.LoyaltyCredit}} &nbsp; &nbsp;&nbsp;<strong>Day Revenue: </strong>{{selectedOperator.DayRevenue == '0E-10' ? 0 : selectedOperator.DayRevenue}}, &nbsp;&nbsp;&nbsp;  <strong>Total Revenue: </strong>{{selectedOperator.TotalRevenue == '0E-10' ? 0 : selectedOperator.TotalRevenue}}</p>\n" +
    "\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <hr/>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div><h3>{{selectedOperator.LotID1}}</h3></div>\n" +
    "      <div><h4>Set Daily Price ($ per Hour)</h4></div>\n" +
    "      <div>\n" +
    "        <rzslider\n" +
    "         rz-slider-model=\"lot1Slider.value\"\n" +
    "         rz-slider-options=\"lot1Slider.options\"></rzslider><br/><br/>\n" +
    "         <p style=\"color:blue; font-weight:bold;\">Slide to set daily price (hourly rate)</p>\n" +
    "      </div>\n" +
    "      <hr/>\n" +
    "      <div>\n" +
    "        <div class=\"slot-tile\" ng-repeat=\"slot in lot1Slots\">\n" +
    "          <img src=\"assets/car2.png\" ng-if=\"slot.ParkingSpot.SpotStatus=='Full'\">\n" +
    "          <span ng-if=\"slot.ParkingSpot.SpotStatus=='Available'\" style=\"color:green;\">Available</span>\n" +
    "          <span ng-if=\"slot.ParkingSpot.SpotStatus=='Reserved'\" style=\"color:red;\">Reserved</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div><h3>{{selectedOperator.LotID2}}</h3></div>\n" +
    "      <div><h4>Set Daily Price ($ per Hour)</h4></div>\n" +
    "      <div>\n" +
    "        <rzslider\n" +
    "         rz-slider-model=\"lot2Slider.value\"\n" +
    "         rz-slider-options=\"lot2Slider.options\"></rzslider><br/><br/>\n" +
    "         <p style=\"color:red; font-weight:bold;\">* Daily price must be set before 8 AM</p>\n" +
    "      </div>\n" +
    "      <hr/>\n" +
    "      <div>\n" +
    "        <div class=\"slot-tile\" ng-repeat=\"slot in lot2Slots\">\n" +
    "          <img src=\"assets/car2.png\" ng-if=\"slot.ParkingSpot.SpotStatus=='Full'\">\n" +
    "          <span ng-if=\"slot.ParkingSpot.SpotStatus=='Available'\"  style=\"color:green;\">Available</span>\n" +
    "          <span ng-if=\"slot.ParkingSpot.SpotStatus=='Reserved'\" style=\"color:red;\">Reserved</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  \n" +
    "</div>");
}]);

angular.module("reports/reports.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("reports/reports.tpl.html",
    "<div class=\"row\">\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
