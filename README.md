# Assignment-Fullthrottle Using React.js , json-server and Deployed on Heroku

This Project contains Two directories one is confusion that contains React.js Code and other one is json-server this is a mock RESTapi Server


## Requirements

Json-server (Mock RESTAPI) Server 
NPM
Heroku CLI


### Build

Create a directory on a convenient location
use commmand $ create-react-app confusion to create react app
use npm init
add some information to npm init
click Yes
Project is initiated with App.js , index.js and Package.json file etc

### Configure Json-Server(Mock RESTapi Server) 

Move to Json-server directory
create a Json File with name db.json

"members": [{
			"id": "W012A3CDE",
			"real_name": "Egon Spengler",
			"tz": "America/Los_Angeles",
			"activity_periods": [{
					"start_time": "Feb 1 2020  1:33PM",
					"end_time": "Feb 1 2020 1:54PM"
				},
        
Save json file as db.json
        

### Configure React App

React app should be showing details of Members in db.json Using Modal
Fetch Api is Used to render take json data from db.json to our React.js app
add components MainComponent.js and User.js in App.js


###  Start Json-Server

json Server should be running 
Use command json-server --watch db.json -p 3001 -d 2000
where p is the port and d is the delay


### Start React App

Start Using npm start
Now the app would be there on localhost port 3000

### Deployment Using Heroku

Go to Heroku.com and login there 
Download Heroku CLI
Add Buildpack 
GO to Terminal and login to Heroku using Heroku cli ,Commmand is heroku login
Intitialise git and push git to heroku 
heroku git:remote -a assignment-fullthrottle



# After that app is hosted to heroku you can access it
# First go to https://json-server-full.herokuapp.com/ to start json-server
# Then Run the App By Going to link https://assignment-fullthrottle.herokuapp.com/


## Languages & tools


### React.js
### Json-server
### NPM
### Heroku cli
