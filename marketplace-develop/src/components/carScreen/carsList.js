import React from 'react'
import {
    View,
    ScrollView,
    Text
} from 'react-native'
import { Car } from './carCard'

const CarsList = () => {
    return (
        <ScrollView style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#EEF2F5',
            paddingTop: 20,
            marginBottom: 80
        }}>
            <Car />
            <Car />
            <Car />
            <Car />
        </ScrollView>
    )
}

export default CarsList