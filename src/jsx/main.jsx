/****************************************************************************
**
**
**
**
****************************************************************************/
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Pages } from './items/Pages';
import { GlobalStates } from './items/States';


const App = () => {

    return (
        <NavigationContainer>
            <GlobalStates>
                <Pages />
            </GlobalStates>
        </NavigationContainer >
    );
};

export default App;
