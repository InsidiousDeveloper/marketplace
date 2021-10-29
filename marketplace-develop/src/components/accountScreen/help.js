import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { globalStyles } from '../../styles/style'

const HelpPage = () => {
    return (
        <View style={globalStyles.main}>
            <View style={styles.container}>
                <View>
                    <Text style={globalStyles.blackText}>Toyota</Text>
                    <Text style={globalStyles.blueText}>smth brand</Text>
                </View>
                <Text style={globalStyles.buttonText}>01AAOOBB 09</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={globalStyles.blackText}>Toyota</Text>
                    <Text style={globalStyles.blueText}>smth brand</Text>
                </View>
                <Text style={globalStyles.buttonText}>01AAOOBB 09</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={globalStyles.blackText}>Toyota</Text>
                    <Text style={globalStyles.blueText}>smth brand</Text>
                </View>
                <Text style={globalStyles.buttonText}>01AAOOBB 09</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={globalStyles.blackText}>Toyota</Text>
                    <Text style={globalStyles.blueText}>smth brand</Text>
                </View>
                <Text style={globalStyles.buttonText}>01AAOOBB 09</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={globalStyles.blackText}>Toyota</Text>
                    <Text style={globalStyles.blueText}>smth brand</Text>
                </View>
                <Text style={styles.buttonText}>01AAOOBB 09</Text>
            </View>
        </View>
    )
}

export default HelpPage

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
})