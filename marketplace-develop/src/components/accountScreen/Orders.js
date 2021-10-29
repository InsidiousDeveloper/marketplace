import React from 'react'
import {globalStyles} from '../../styles/style'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const AccountOrders = () => {
    return <ScrollView style={globalStyles.main}>
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.blackText}>Toyota</Text>
                <Text style={globalStyles.blueText}>smth brand</Text>
            </View>
            <Text style={globalStyles.buttonText}>01AAOOBB 09</Text>
        </View>
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.blackText}>Toyota</Text>
                <Text style={globalStyles.blueText}>smth brand</Text>
            </View>
            <Text style={globalStyles.buttonText}>01AAOOBB 09</Text>
        </View>
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.blackText}>Toyota</Text>
                <Text style={globalStyles.blueText}>smth brand</Text>
            </View>
            <Text style={globalStyles.buttonText}>01AAOOBB 09</Text>
        </View>
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.blackText}>Toyota</Text>
                <Text style={globalStyles.blueText}>smth brand</Text>
            </View>
            <Text style={globalStyles.buttonText}>01AAOOBB 09</Text>
        </View>
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.blackText}>Toyota</Text>
                <Text style={globalStyles.blueText}>smth brand</Text>
            </View>
            <Text style={styles.buttonText}>01AAOOBB 09</Text>
        </View>
    </ScrollView>
}

export default AccountOrders

const styles = StyleSheet.create({
    buttonText: {
        color: "#A7A9BE"
    }
})