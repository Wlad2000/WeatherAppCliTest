/****************************************************************************
**ForecastScreen
**contain: FORECAST 5d/3h
**
**
****************************************************************************/
import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useGlobalStates } from '../items/States';
import Forecast from '../components/Forecast';
import Error from '../components/Error';

const ForecastScreen = ({ route }) => {
    const { defaultCity, isCelsius } = useGlobalStates();
    const [loading, setLoading] = useState(false);
    const { forecastData } = route.params;
    return (
        <View style={{ flex: 1, alignItems: "center" }} >
            <View style={{ backgroundColor: 'lightblue', alignItems: 'center', borderRadius: 50, width: '95%', marginTop: 20, padding: 15 }}>
                <Text style={{ marginTop: 5, color: 'gray' }}>Location:</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}> {forecastData?.city.name}</Text>
            </View >
            {/*FORECAST 5d/3h */}
            {
                loading ? (
                    <ActivityIndicator size="large" style={{ marginTop: 50 }} />
                ) : forecastData ? (
                    <View style={{ height: 200, marginTop: 40, width: '100%' }}>
                        <Text style={{
                            marginLeft: 15, padding: 5, marginTop: 5, color: 'gray', fontWeight: '500', fontSize: 20
                        }}>5 Day / 3 Hour Forecast:</Text>
                        <FlatList
                            data={forecastData.list}
                            renderItem={({ item }) => Forecast({ item, isCelsius })}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            contentContainerStyle={{ flexGrow: 1 }}
                            initialNumToRender={10}
                            onEndReachedThreshold={0.3}
                        />
                    </View>
                ) : <Error message={'Opps have a problem with ForecastData..'} />
            }
        </View >
    )
}

export default ForecastScreen