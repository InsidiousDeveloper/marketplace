import React, { useState } from 'react'
import { Switch } from 'react-native-paper'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { localPasscodeToggle } from '../../redux/appReducer'
import { globalStyles } from '../../styles/style'

const SecurityAndSettings = () => {

    const dispatch = useDispatch()
    const isPasscodeEnabled = useSelector(state => state.app.isPasscodeEnabled)

    const onToggleSwitch = () => dispatch(localPasscodeToggle());

    return (
        <View style={globalStyles.main}>
            <View style={styles.container}>
                <View>
                    <Text style={globalStyles.blackText}>
                        Enable local passcode
                    </Text>
                    <Text style={globalStyles.blueText}>
                        Sets a password while entering the app
                    </Text>
                </View>
                <Switch value={isPasscodeEnabled} onValueChange={onToggleSwitch} />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={globalStyles.blackText}>
                        Change local passcode
                    </Text>
                    {
                        isPasscodeEnabled ?
                            <Text style={globalStyles.blueText}>
                                Tap to change
                            </Text> :
                            <Text style={globalStyles.grayText}>
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