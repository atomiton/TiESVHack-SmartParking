# TiESVHack-SmartParking
## User Interface
![](https://github.com/atomiton/TiESVHack-SmartParking/blob/master/images/Smart_Parking.png)
## Application Flow
![](https://github.com/atomiton/TiESVHack-SmartParking/blob/master/images/Smart_Parking_Fig.png)
##How it works?
A developer plays a role of a Parking lot operator. Who sets day price before 8 a.m. every day and keeps posting the information about his parking lots to CityParkingApp and OperatorApp. This information includes Vacancy, Hourly rate, etc.
Operator is also able to send private information to the drivers who has adopted OperatorApp.
When an operator gets a request for parking from drivers he reserves a parking slot in the requested lot.
App keeps posting the parking lot information to CityParkingApp and Operator app at particular interval.  This information is further passed on to drivers which turns out with the maximum reach to drivers and attracting more reservations. Operator can also send information manually.
Parking spot occupancy is displayed on the UI. Application gets occupancy updates through subscription to Spot occupancy status.
Operator's total revenue, Day revenue and the Loyalty credit is displayed on UI.
Operator can also track the drivers and other parking lots on the map.
Reports can be generated with the components like Revenue, Parking spot reservations against time with the help of charts in the Reports section.

##Setup
###Clone repository
#####git clone https://github.com/atomiton/TiESVHack-SmartParking.git
#####cd TiESVHack-SmartParking
###Install dependencies
We are using Grunt as the build tool, to install Grunt we need to install Node.
Once we install node we can use npm to install grunt, karma and bower.
#####After installing node…
#####npm -g install grunt-cli karma bower
#####Then install remaining dependencies locally,
#####npm install
This will read dependencies and devDependencies from package.json file and install everything inside a folder node_modules.

We have used list of bower packages, like angular-ui, bootstrap and many more. These packages are listed along with their version in bower.json file.
Let’s install them.

#####bower install
Done! We are ready. 

Now, to ensure the setup works properly, launch grunt

#####grunt watch

This builds the source and place the built files inside build folder. Open build/index.html in the browser and check it out.
#####http://localhost:9000/

####Alternatively, we can deploy ParkingUI on any server to start the application.

###Live demo
http://54.152.167.105/fid-parkingui/index.html
