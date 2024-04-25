/** Func Returns WeatherCard
 * @param {data} weatherData
 * 
 *
 *    
 */
import React from 'react'
import { Image, Text, View } from 'react-native'
import { convertTemperature } from '../utils/util';
import { useGlobalStates } from '../items/States';

const WeatherCard = ({ weatherData }) => {
    const { defaultCity, setDefaultCity, isCelsius, setIsCelsius } = useGlobalStates();
    return (
        <View style={{ marginTop: 15, padding: 15, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: '90%' }}>
            <Text style={{ marginTop: 5, color: 'gray' }}>Location:</Text>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}> {weatherData.name}</Text>
            <Image
                style={{ width: 100, height: 60 }}
                source={{ uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` }}
            />
            <Text style={{ marginTop: 5, color: 'gray' }}>Temperature:</Text>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 45 }}> {convertTemperature(isCelsius, weatherData.main.temp)}</Text>
            <Text style={{ fontWeight: '600', color: 'white', fontSize: 20 }}> max: {convertTemperature(isCelsius, weatherData.main.temp_max)} | min: {convertTemperature(isCelsius, weatherData.main.temp_min)}</Text>
            <Text style={{ marginTop: 8, color: 'gray' }}>Description:</Text>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 20 }}> {weatherData.weather[0].description}</Text>

        </View >
    )
}

export default WeatherCard