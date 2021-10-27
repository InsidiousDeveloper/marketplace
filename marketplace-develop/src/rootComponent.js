import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogIn } from './components/login'
import { SignIn } from './components/signin'
import RentsPage from './components/rentsScreen/rentsPage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, View } from 'react-native'
import {
    DefaultTheme,
    Provider as PaperProvider
} from 'react-native-paper'
import { useSelector } from 'react-redux'
import AccountScreen from './components/accountScreen'
import CarsScreen from './components/carScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Tab = createBottomTabNavigator();

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
    // const isAuthenticated = true
    const isAuthenticated = useSelector(state => state.app.isAuthenticated)
    // const Stack = createStackNavigator();
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

    return <>

        <PaperProvider theme={theme}>
            <Tab.Navigator
                initialRouteName="VehiclesPage"
                backBehavior={{
                    firstRoute: 'VehiclesPage'
                }}
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 15,
                        left: 15,
                        right: 15,
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        height: 70,
                        ...styles.shadow
                    },
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

                        size = focused ? 40 : 25
                        color = focused ? 'blue' : '#777'

                        // You can return any component that you like here!
                        return (
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                <TouchableOpacity>
                                    <Ionicons
                                        style={{
                                            zIndex: 10,
                                        }}
                                        name={iconName}
                                        size={size}
                                        color={color}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="RentsPage" component={RentsPage} />
                <Tab.Screen name="VehiclesPage" component={CarsScreen} />
                <Tab.Screen name="AccountPage" component={AccountScreen} />
            </Tab.Navigator>
        </PaperProvider>
    </>
}

export default RootComponent

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#00f',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5
    }
})