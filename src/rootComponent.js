import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { LogIn } from './components/login'
import { SignIn } from './components/signin'
import VehiclesPage from './components/vehiclesPage'
import RentsPage from './components/rentsPage'
import AccountPage from './components/accountPage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    DefaultTheme,
    Text,
    Provider as PaperProvider
} from 'react-native-paper'

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
    },
}

const RootComponent = () => {

    const isAuthenticated = true

    if (!isAuthenticated) {
        return (
            <Tab.Navigator
                initialRouteName="LogIn"
                barStyle={{ display: 'none' }}
            >
                <Tab.Screen name="LogIn" component={LogIn} />
                <Tab.Screen name="SignIn" component={SignIn} />
            </Tab.Navigator>
        )
    }

    return (
        <PaperProvider theme={theme}>
            <Tab.Navigator
                initialRouteName="VehiclesPage"
                labeled={true}
                shifting={true}
                barStyle={{
                    backgroundColor: 'white',
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'RentsPage') {
                            iconName = focused
                                ? 'ios-people-sharp'
                                : 'ios-people-outline'
                        } else if (route.name === 'VehiclesPage') {
                            iconName = focused
                                ? 'ios-car-sport-sharp'
                                : 'ios-car-sport-outline'
                        } else if (route.name === 'AccountPage') {
                            iconName = focused
                                ? 'ios-person-sharp'
                                : 'ios-person-outline'
                        }

                        size = focused ? 30 : 20
                        color = focused ? 'blue' : '#777'

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 50,
                                    zIndex: 10,
                                    transform: [{ translateX: 10 }]
                                }}
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen options={{ tabBarLabel: <Text style={{ fontSize: 15 }}>Rents</Text> }} name="RentsPage" component={RentsPage} />
                <Tab.Screen options={{ tabBarLabel: <Text style={{ fontSize: 15 }}>Vehicles</Text> }} name="VehiclesPage" component={VehiclesPage} />
                <Tab.Screen options={{ tabBarLabel: <Text style={{ fontSize: 15 }}>Account</Text> }} name="AccountPage" component={AccountPage} />
            </Tab.Navigator>
        </PaperProvider>
    )
}

export default RootComponent