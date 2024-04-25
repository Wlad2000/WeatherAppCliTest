/** Func Returns Forecast
 * @param {data,boolean} ForecastData isCelsius  
 * 
 *
 *    
 */
import React from 'react'
import { convertTemperature, getDayAndTime } from '../utils/util'
import { Image, Text, View } from 'react-native'
import { useGlobalStates } from '../items/States'



const Forecast = ({ item, isCelsius }) => {
    return (
        <View style={{
            flex: 1, flexDirection: 'column', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'gray', height: 160, backgroundColor: 'lightblue', padding: 10
        }
        } >
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontWeight: '700', color: 'black', }}>{getDayAndTime(item.dt).dayOfWeek}</Text>
                <Text>{getDayAndTime(item.dt).numDayOfWeek}</Text>
                <Text style={{ fontWeight: 'bold', color: 'brown' }}>{getDayAndTime(item.dt).time}</Text>
            </View>

            <Image
                style={{ width: 60, height: 50 }}
                source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png` }}
            />
            <Text style={{ marginLeft: 10, color: 'white', fontWeight: 'bold', fontSize: 18 }
            }> {convertTemperature(isCelsius, item.main.temp.toFixed(1))} </Text >

        </View >
    )
}

export default Forecast