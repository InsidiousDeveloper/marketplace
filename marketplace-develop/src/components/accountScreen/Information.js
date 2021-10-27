import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AccountInformation = () => {
    return <View style={styles.main}>
        <View style={styles.container}>
            <View>
                <Text style={styles.blackText}>UserName</Text>
                <Text style={styles.blueText}>James Warden</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={styles.blackText}>Email</Text>
                <Text style={styles.blueText}>j-warden@email.com</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={styles.blackText}>Phone number</Text>
                <Text style={styles.blueText}>+33 6 16 39 54 78</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={styles.blackText}>Credit card number</Text>
                <Text style={styles.blueText}>1234 **** **** 0000</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={styles.blackText}>Password</Text>
                <Text style={styles.blueText}>*******************</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={styles.blackText}>Account type</Text>
                <Text style={styles.blueText}>Premium</Text>
            </View>
            <Text style={styles.buttonText}>Change</Text>
        </View>
    </View>
}


export default AccountInformation


const styles = StyleSheet.create({
    main: {
        widht: "100%",
        height: "100%",
        paddingHorizontal: 15,
        backgroundColor: "#EEF2F5",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 15,
    },
    blackText: {
        color: "#000",
        fontSize: 18
    },
    blueText: {
        color: "#0001FC"
    },
    buttonText: {
        color: "#A7A9BE"
    }
})