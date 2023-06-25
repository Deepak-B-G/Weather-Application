const API_KEY = '{Your__API__Key}'; //Fill it with your API KEY
const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

    const data = await fetch(URL)
     .then((res) => res.json())
     .then((data) => data);

const {weather, 
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity },
wind: {speed},
sys: {country},
name,
} = data;

const {description, icon} = weather[0];

return {
    description,
     iconURL: makeIconURL(icon),
     temp_min,
     temp_max,
     pressure,
     humidity,
    speed,
    country,
    name,
    temp,
    feels_like,
};
};

export {getFormattedWeatherData}