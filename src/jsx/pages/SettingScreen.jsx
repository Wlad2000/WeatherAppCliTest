/****************************************************************************
** SettingScreen
** contain: toggleSwitch
**
**
****************************************************************************/
import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native';
import { useGlobalStates } from '../items/States';

const SettingScreen = () => {
    const { isCelsius, setIsCelsius } = useGlobalStates();
    const toggleSwitch = () => setIsCelsius(previousState => !previousState);

    return (
        <View style={{
            flex: 1, alignItems: "center"
        }}>
            <Text style={{ marginTop: 25, color: 'gray' }}>Temperature units:</Text>
            <View style={{
                alignItems: 'center',
                marginTop: 30,
                justifyContent: 'center',
                flexDirection: 'row',
                columnGap: 50,
                height: 100
            }}>
                <Text style={{
                    color: `${isCelsius ? '#81b0ff' : 'gray'}`, fontWeight: 'bold', fontSize: 20
                }}>Celsius</Text>
                <Switch
                    trackColor={{ false: '#81b0ff', true: 'gray' }}
                    thumbColor={isCelsius ? '#81b0ff' : '#81b0ff'}
                    ios_backgroundColor="gray"
                    onValueChange={toggleSwitch}
                    value={!isCelsius}
                    style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                />
                <Text style={{
                    color: `${!isCelsius ? '#81b0ff' : 'gray'}`, fontWeight: 'bold', fontSize: 18
                }}>Fahrenheit</Text>
            </View >
        </View >
    );
};


export default SettingScreen