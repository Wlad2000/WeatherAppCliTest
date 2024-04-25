/** Func Returns HourlyForecast
 * @param {data} hourlyForecastData  
 * 
 *
 *    
 */
import React from 'react'
import { convertTemperature, getDayAndTime } from '../utils/util'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useGlobalStates } from '../items/States';


const HourlyForecast = ({ hourlyForecastData }) => {
    const { isCelsius } = useGlobalStates();

    const todayDate = new Date().toISOString().slice(0, 10);
    // Filter hourly weather data for today
    const todayHourlyWeather = hourlyForecastData.time.reduce((acc, time, index) => {
        if (time.startsWith(todayDate)) {
            acc.time.push(time);
            acc.temperature_2m.push(hourlyForecastData.temperature_2m[index]);
        }
        return acc;
    }, { time: [], temperature_2m: [] });

    return (
        <View style={{ height: 130, marginTop: 10, width: '100%' }}>
            <Text style={{
                marginLeft: 15, padding: 5, marginTop: 5, color: 'gray', fontWeight: '500', fontSize: 20
            }}>Hourly Forecast:</Text>
            <ScrollView horizontal>
                <View style={{
                    flexDirection: 'column', backgroundColor: 'lightblue'
                }}>
                    <View style={{
                        flexDirection: 'row', borderBottomWidth: 1,
                    }}>
                        {todayHourlyWeather.time.map((hour, index) => (
                            <View key={index} style={styles.cell} >
                                <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 15 }}> {new Date(hour).getHours()}:00</Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        {todayHourlyWeather.temperature_2m.map((temperature, index) => (
                            <View key={index} style={styles.cell}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }
                                }> {convertTemperature(isCelsius, temperature)} </Text >
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView >
        </View >
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cell: {
        padding: 12,
        minWidth: '5%',
        textAlign: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white',
        alignItems: 'center',
    },
});

export default HourlyForecast