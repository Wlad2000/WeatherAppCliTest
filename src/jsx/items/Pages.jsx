/****************************************************************************
**
**
**
**
****************************************************************************/

import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import SettingScreen from "../pages/SettingScreen";
import ForecastScreen from "../pages/ForecastScreen";


const Pages = (props) => {
    const Stack = createStackNavigator();

    const headerBar = {
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { color: 'gray' }
    };

    return (
        <Stack.Navigator initialRouteName="Weather">
            <Stack.Screen name="Weather" component={HomeScreen} options={headerBar} />
            <Stack.Screen name="Setting" component={SettingScreen} options={headerBar} />
            <Stack.Screen name="Forecast" component={ForecastScreen} options={headerBar} />
        </Stack.Navigator>
    )


};

export { Pages };