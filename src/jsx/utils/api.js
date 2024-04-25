import axios from "axios";


/** Func Returns weatherData  
 * @param {string} cityName 
 * @example
 * fetchWeatherData('Kyiv') //return { data.... };
 */
const fetchWeatherData = async (cityName) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
       // const data = await response.json();
       return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
           //?
           return null;
    } 
};

/** Func Returns weatherData  
 * @param {number,number} latitude, longitude 
 * @example
 * fetchWeatherData(40,40) //return { data.... };
 */
const fetchDefaultCityWeather = async (latitude, longitude) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching def city weather:', error);
        return null;
    }
};
/** Func Returns weatherDataForecast 5days/3hour
 * @param {number,number} latitude, longitude 
 * @example
 * fetchWeatherData(40,40) //return { data.... };
 */
const fetchForecastCityWeather = async (latitude, longitude) => {
    try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching forecast weather:', error);
        return null;
    }
};
/** Func Returns weatherDataHourlyDayForecast
 * @param {number,number} latitude, longitude 
 * @example
 * fetchWeatherData(40,40) //return { data.... };
 */
const fetchCurrentHourlyWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };
  
  export { fetchWeatherData, fetchDefaultCityWeather,fetchForecastCityWeather,fetchCurrentHourlyWeather};
  