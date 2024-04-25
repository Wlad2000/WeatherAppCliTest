/****************************************************************************
** Home Page 
** contain: SEARCH CITY AREA; WEATHER CARD; FORECAST HOURLY; NavigationBar
**
**
****************************************************************************/
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { fetchCurrentHourlyWeather, fetchDefaultCityWeather, fetchForecastCityWeather, fetchWeatherData } from '../utils/api';
import { useGlobalStates } from '../items/States';
import WeatherCard from '../components/WeatherCard';
import NavigationBar from '../components/NavigationBar';
import HourlyForecast from '../components/HourlyForecast';
import Error from '../components/Error';
import { capitalizeFirstLetter } from '../utils/util';



const HomeScreen = () => {
    const { defaultCity, setDefaultCity, lastCity, setLastCity } = useGlobalStates();
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [forecastData, setForecastData] = useState(null);
    const [hourlyForecastData, setHourlyForecastData] = useState(null);

    useEffect(() => {
        fetchDefaultLocation();
    }, []);

    useEffect(() => {
        lastCityData();
    }, []);

    /* get lastCity */
    const lastCityData = async () => {
        try {
            const lastCity = await AsyncStorage.getItem('lastCity');
            if (lastCity) {
                setLastCity(lastCity);
            }
        } catch (error) {
            console.error('Error loading last city:', error);
        }
    };
    /* get Geolocation */
    const fetchDefaultLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                defaultCityWeather(latitude, longitude);
            },
            error => {
                console.error('Error getting current location:', error);
            }
        );
    };
    /* action Search Default/Geolocation Weather with latitude, longitude */
    const defaultCityWeather = (latitude, longitude) => {
        setLoading(true);
        fetchDefaultCityWeather(latitude, longitude)
            .then(data => {
                setDefaultCity(data.name);
                setWeatherData(data);
                //
                weatherForecastData(latitude, longitude)
                weatherHourlyForecastData(latitude, longitude)
                //
            })
            .catch(error => {
                console.error('Error fetching DefaultCityWeather:', error);
            }).finally
        setLoading(false);
    }
    /* simple handler */
    const handleSearch = (city) => {
        cityWeatherData(city);
        setCity('')
    };

    /* action Search Weather with cityName */
    const cityWeatherData = (city) => {
        setLoading(true);
        fetchWeatherData(city)
            .then(data => {
                setWeatherData(data);
                //
                weatherForecastData(data.coord.lat, data.coord.lon)
                weatherHourlyForecastData(data.coord.lat, data.coord.lon)
                //
                lastCityData();
            })
            .catch(error => {
                console.error('Error fetching WeatherData:', error);
            }).finally
        setLoading(false);
    }
    /* action HOURLY CUR FORECAST  */
    const weatherHourlyForecastData = (latitude, longitude) => {
        setLoading(true);
        fetchCurrentHourlyWeather(latitude, longitude)
            .then(data => {
                setHourlyForecastData(data.hourly);
            })
            .catch(error => {
                console.error('Error fetching ForecastData:', error);
            }).finally
        setLoading(false);
    }

    /* action FORECAST 5d/3h for FORECAST-SCREEN*/
    const weatherForecastData = (latitude, longitude) => {
        setLoading(true);
        fetchForecastCityWeather(latitude, longitude)
            .then(data => {
                setForecastData(data);
            })
            .catch(error => {
                console.error('Error fetching ForecastData:', error);
            }).finally
        setLoading(false);
    }


    return (
        <View style={{
            flex: 1, alignItems: "center"
        }}>
            {/*SEARCH CITY AREA with link last(lastSearch)*/}
            <View style={{
                flexDirection: "row", marginTop: 15, height: 40,
            }}>
                <TextInput
                    style={{
                        height: 40, width: '60%', borderColor: 'lightgray', borderWidth: 4, marginBottom: 20, fontSize: 19, color: 'brown'
                    }}
                    placeholder="Enter city name"
                    value={city}
                    onChangeText={setCity}
                />
                {city.length >= 2 && < Button title="Search" onPress={() => { handleSearch(city); AsyncStorage.setItem('lastCity', capitalizeFirstLetter(city)); }} />}
            </View>
            {lastCity && lastCity !== defaultCity && weatherData && weatherData.name !== lastCity &&
                <TouchableOpacity onPress={() => handleSearch(lastCity)}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginTop: 15, color: 'gray', fontSize: 17 }}>last search location: </Text>
                        <Text style={{ marginTop: 15, color: 'brown', fontSize: 17 }}> {lastCity}</Text>
                    </View>
                </TouchableOpacity>
            }

            {/*WEATHER CARD with link back(defaultLocation) */}
            {
                loading ? (
                    <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: 50 }} />
                ) : weatherData ? (
                    <>
                        {weatherData.name !== defaultCity && < TouchableOpacity onPress={() => handleSearch(defaultCity)}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ marginTop: 15, color: 'gray', fontSize: 17 }}>your location: </Text>
                                <Text style={{ marginTop: 15, color: 'brown', fontSize: 17 }}> {defaultCity}</Text>
                            </View>
                        </TouchableOpacity>}
                        <WeatherCard weatherData={weatherData} />

                    </>
                ) : <Error message={'Opps have a problem with weatherData..'} />

            }
            {/*FORECAST hourly */}
            {
                loading ? (
                    <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: 50 }} />
                ) : hourlyForecastData ? (
                    <HourlyForecast hourlyForecastData={hourlyForecastData} />
                ) : <Error message={'Opps have a problem with HourlyForecastData..'} />
            }
            {/*NavigationBar FORECAST AND SETTING*/}
            <NavigationBar forecastData={forecastData} />
        </View >
    );
};


export default HomeScreen;
