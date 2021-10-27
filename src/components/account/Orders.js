import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AccountOrders = () => {
    return <View style={styles.main}>
        <Text style={styles.headerText}>Orders</Text>
        <View style={styles.container}>
            <View>
                <Text style={styles.blackText}>Toyota</Text>
                <Text style={styles.blueText}>smth brand</Text>
            </View>
            <Text style={styles.buttonText}>01AAOOBB 09</Text>
        </View>
        <View style={styles.container}>
            <View>
            <Text style={styles.blackText}>Toyota</Text>
                <Text style={styles.blueText}>smth brand</Text>
            </View>
            <Text style={styles.buttonText}>01AAOOBB 09</Text>
        </View>
        <View style={styles.container}>
            <View>
            <Text style={styles.blackText}>Toyota</Text>
                <Text style={styles.blueText}>smth brand</Text>
            </View>
            <Text style={styles.buttonText}>01AAOOBB 09</Text>
        </View>
        <View style={styles.container}>
            <View>
            <Text style={styles.blackText}>Toyota</Text>
                <Text style={styles.blueText}>smth brand</Text>
            </View>
            <Text style={styles.buttonText}>01AAOOBB 09</Text>
        </View>
        <View style={styles.container}>
            <View>
            <Text style={styles.blackText}>Toyota</Text>
                <Text style={styles.blueText}>smth brand</Text>
            </View>
            <Text style={styles.buttonText}>01AAOOBB 09</Text>
        </View>
    </View>
}


export default AccountOrders


const styles = StyleSheet.create({
    main: {
        widht: "100%",
        height: "100%",
        backgroundColor: "#fff",

    },
    headerText: {
        color: "#000",
        fontSize: 24,
        marginLeft: 20,
        marginTop: 30,
        fontWeight: "bold"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    blackText: {
        color: "#000"
    },
    blueText: {
        color: "#0001FC"
    },
    buttonText: {
        color: "#A7A9BE"
    }
})