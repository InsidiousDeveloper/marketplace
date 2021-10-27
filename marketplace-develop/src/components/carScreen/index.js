import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CarDetails from './carDetails'
import VehiclesPage from './vehiclesPage'

const Stack = createStackNavigator()

const CarsScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CarsPage"
                options={{headerShown: false}}
                component={VehiclesPage}
            />
            <Stack.Screen
                name="CarDetails"
                component={CarDetails}
                options={{
                    headerTitle: 'Car Details'
                }}
            />
        </Stack.Navigator>
    )
}

export default CarsScreen