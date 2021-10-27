import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
    Text
} from 'react-native'
import AccountPage from './accountPage'
import AccountOrders from './Orders'
import AccountInformation from './Information'
import SecurityAndSettings from './securityAndSettings'

const Stack = createStackNavigator()

const AccountScreen = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Account"
            screenOptions={{
                headerStyle: { backgroundColor: '#EEF2F5' },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25
                },
            }}
        >
            <Stack.Screen
                name="Account"
                options={{ headerShown: false }}
                component={AccountPage}
            />
            <Stack.Screen
                name="Orders"
                component={AccountOrders}
                options={{
                    headerTitle: 'Orders',
                }}
            />
            <Stack.Screen
                name="AccountInformation"
                component={AccountInformation}
                options={{
                    headerTitle: 'Account Information',
                }}
            />
            <Stack.Screen
                name="SecurityAndSettings"
                component={SecurityAndSettings}
                options={{
                    headerTitle: 'Security & Settings',
                }}
            />
        </Stack.Navigator>
    )
}

export default AccountScreen