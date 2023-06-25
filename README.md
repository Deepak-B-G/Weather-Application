# Weather-Application

This project is a weather application that provides users with real-time weather information for a specific location. It is built using React.js for the frontend and utilizes the OpenWeather API to retrieve weather data. The application is then hosted using Amazon S3 (Simple Storage Service) bucket, ensuring easy deployment and accessibility.

 ## Features
1. Search for weather information by location.
2. Display current weather conditions including temperature, humidity, and wind speed.
3. Automatically update weather data every 10 minutes.
4. The data can be viewed in Celcius and Fahrenheit.

## Technologies Used
* React
* AWS S3 bucket

## Demo 

Visit [DEMO](http://simple-weather-application.s3-website.ap-south-1.amazonaws.com/) in your web browser.





![01](https://github.com/Deepak-B-G/Weather-Application/assets/97933847/fb596d51-e24b-443f-a20c-10fa6d05bb3e)

ure 01: Sample working of the application in Metric format.

![02](https://github.com/Deepak-B-G/Weather-Application/assets/97933847/d2d79e51-36d2-4293-9d84-144f30becfd6)

Figure 02: Sample working of the application in Imperial format.

## Installation

1. Clone the Repository.
```
https://github.com/Deepak-B-G/Weather-Application.git
```
2. Navigate to my-app
```
cd my-app
```
3. Install Dependencies
```
npm install axios
npm i react-icons
npm install -g serve
```
## Run the Application

1. To host the application locally
```
 npm run start
   ```
2.  To build the files
```
serve -b build
```
Open your browser and visit http://localhost:3000 to access the weather application locally.

3. Get your API key from logging/signing  in the [OpenWeather](https://openweathermap.org/).

## API usage

This application utilizes the OpenWeatherMap API to retrieve weather data. 

## Contributing
Contributions to this project are welcome. If you have any suggestions, improvements, or bug fixes, please create a pull request.




   
