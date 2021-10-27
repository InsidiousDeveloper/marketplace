import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const AccountOrders = () => {
    return <ScrollView style={styles.main}>
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
    </ScrollView>
}

export default AccountOrders

const styles = StyleSheet.create({
    main: {
        widht: "100%",
        height: "100%",
        backgroundColor: "#EEF2F5",
        paddingHorizontal: 15,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 15,
        elevation: 2
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