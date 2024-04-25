/** Func Returns simple Error Message
 * @param {text} message
 * 
 *
 *    
 */
import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const Error = ({ message }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="blue" style={{ marginTop: 50 }} />
            <Text style={{ marginTop: 10, color: 'brown', fontSize: 20 }}>{message}</Text>
        </View >
    )
}

export default Error