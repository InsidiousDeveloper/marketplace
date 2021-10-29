import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../styles/style'

const AccountInformation = () => {
    return <View style={globalStyles.main}>
        <View style={styles.container}>
            <View>
                <Text style={globalStyles.blackText}>UserName</Text>
                <Text style={globalStyles.blueText}>James Warden</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={globalStyles.blackText}>Email</Text>
                <Text style={globalStyles.blueText}>j-warden@email.com</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={globalStyles.blackText}>Phone number</Text>
                <Text style={globalStyles.blueText}>+33 6 16 39 54 78</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={globalStyles.blackText}>Credit card number</Text>
                <Text style={globalStyles.blueText}>1234 **** **** 0000</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={globalStyles.blackText}>Password</Text>
                <Text style={globalStyles.blueText}>*******************</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={globalStyles.blackText}>Account type</Text>
                <Text style={globalStyles.blueText}>Premium</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
    </View>
}


export default AccountInformation


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    buttonText: {
        color: "#A7A9BE"
    }
})