import React from 'react'
import {
    View,
    ScrollView,
    Text
} from 'react-native'
import { Car, CarCard } from './carCard'

const CarsList = () => {
    return (
        <ScrollView style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            marginTop: 15,
            backgroundColor: '#F9F9FA',
            paddingTop: 20
        }}>
            <Car />
            <Car />
            <Car />
            <Car />
            {/* <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard /> */}
        </ScrollView>
    )
}

export default CarsList