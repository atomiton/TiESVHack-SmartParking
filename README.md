# TiESVHack-SmartParking
## User Interface
![alt tag](https://github.com/atomiton/TiESVHack-SmartParking/blob/master/Smart_Parking.png)
## Application Flow
![alt tag](https://github.com/atomiton/TiESVHack-SmartParking/blob/master/Smart_Parking_Fig.png)

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
