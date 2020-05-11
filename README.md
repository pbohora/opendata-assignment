# opendata-assignment
The live demo is available here: http://morning-coast-65803.herokuapp.com/

A simple data vizualization application using React.js, Node.js, MongoDb, webpack and react-vis(for visualization). The backend of the
application sends get request to the url `https://opendata.hopefully.works/api/events` in every one hour and save the sensors data to the database.

The database keeps the collected data for 3 days and in every 3 days the old data is removed from the database.

In the frontend tha app fetch the collected data from the server and draws the line chart and bar char chart of each sensors using react-vis library.
There are separate visualization for each day.You can choose the date to see the visualization of each sensors in 24 hours time line.

## Quick start

#### 1. Clone the Repo
` git clone https://github.com/pbohora/opendata-assignment.git`

#### 2. Install all packages
```
cd opendata-assignment/
npm install
```
Then, navigate to the client directory and again run the following command:
```
cd client/
npm install
```
#### 3. Add .env
At the root of the application add a file with name `.env`. Inside that file add the following:
```
MONGODB_URI=<your database link>
TOKEN=<your token>
PORT=<give your Port>
```
To get the your token first you need to signup through the api `https://opendata.hopefully.works/api/signup` by sending the POST request with your email and password as JSON in request body and as a return you will receive a token.
```
POST /api/signup
Content-type: application/json
{ "email": "your.email@address", "password": "yourselectedpassword" }
```
#### 4. Run the application 
To run the application, use the following command:
```
npm run dev
```
Your site is now running at `http://localhost:3006`

or you can also run the backend and frontend separately with the following commands
form the root of the project run
```
npm run watch 
```
this will run the backend at `http://localhost:3006`
To run the front end :
```
cd client 
npm start
``` 
and for production
```
npm run build
```

### Eslint 
run eslint 
```
npm run lint
```
fix lint 
```
npm run lint-fix
```

## Running the docker Dev container 
```
docker-compose up
```
the app will be running at `http://localhost:3006`

## Running the Prod container 
```
docker-compose -f docker-compose-test-prod.yml up
```

