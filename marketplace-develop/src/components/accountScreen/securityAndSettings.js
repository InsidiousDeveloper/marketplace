import React, { useState } from 'react'
import { Switch } from 'react-native-paper'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { localPasscodeToggle } from '../../redux/appReducer'

const SecurityAndSettings = () => {

    const dispatch = useDispatch()
    const isPasscodeEnabled = useSelector(state => state.app.isPasscodeEnabled)

    const onToggleSwitch = () => dispatch(localPasscodeToggle());

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.blackText}>
                        Enable local passcode
                    </Text>
                    <Text style={styles.blueText}>
                        Sets a password while entering the app
                    </Text>
                </View>
                <Switch value={isPasscodeEnabled} onValueChange={onToggleSwitch} />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.blackText}>
                        Change local passcode
                    </Text>
                    {
                        isPasscodeEnabled ?
                            <Text style={styles.blueText}>
                                Tap to change
                            </Text> :
                            <Text style={styles.grayText}>
                                To change the local passcode, you have to enable it first.
                            </Text>

                    }
                </View>
            </View>
        </View>
    )
}

export default SecurityAndSettings

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
    },
    blackText: {
        color: "#000",
        fontSize: 18
    },
    blueText: {
        color: "#0001FC"
    },
    grayText: {
        color: "#888"
    },
    buttonText: {
        color: "#A7A9BE"
    },
})