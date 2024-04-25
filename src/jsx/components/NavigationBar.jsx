/** Func Returns NavigationBar
 * contain: btn Forecast; Setting
 * @param {data} props data from screens 
 * 
 *
 *    
 */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faChartPie } from "@fortawesome/free-solid-svg-icons/faChartPie";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = (props) => {
    const navigation = useNavigation();
    const buttons = [
        { icon: faChartPie, navigate: 'Forecast' },
        { icon: faGear, navigate: 'Setting' },
    ];
    return (
        <View style={{ flexDirection: 'row', height: 80, padding: 5, marginBottom: 2, borderRadius: 50, backgroundColor: 'lightgray', justifyContent: 'flex-end', position: 'absolute', bottom: 25, left: 0, right: 0, columnGap: 10 }}>
            {buttons.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate(item.navigate, { ...props })}>
                    <View key={index} style={{
                        backgroundColor: '#81b0ff', borderRadius: 50, height: 70, width: 150, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <FontAwesomeIcon icon={item.icon
                        } color='white' size={35} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default NavigationBar