import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Button, TextInput } from 'react-native-paper'

export const SignIn = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://thumbs.dreamstime.com/b/purple-blue-textured-background-wallpaper-app-background-layout-dark-gradient-colors-vintage-distressed-elegant-78118630.jpg' }}
                style={{ flex: 1, width: '100%' }}

            >
                <View style={styles.wrapper}>
                    <Icon name="location-pin" style={{ marginBottom: 30 }} size={95} color="#fff" />
                    <Text style={{ color: 'white', marginBottom: 15, fontSize: 30 }}>Mobile Marketplace</Text>
                    <TextInput
                        style={styles.input}
                        label="Full Name"
                        mode="flat"
                        underlineColor="blue"
                        selectionColor="royalblue"
                        dense={true}
                        height={50}
                        left={
                            <TextInput.Icon name="account" color="#777" />
                        }
                    />
                    <TextInput
                        style={styles.input}
                        label="Email"
                        mode="flat"
                        keyboardType="email-address"
                        underlineColor="blue"
                        selectionColor="royalblue"
                        dense={true}
                        height={50}
                        left={
                            <TextInput.Icon name="email" color="#777" />
                        }
                    />
                    <TextInput
                        style={styles.input}
                        label="Password"
                        mode="flat"
                        secureTextEntry
                        underlineColor="blue"
                        selectionColor="royalblue"
                        dense={true}
                        height={50}
                        left={
                            <TextInput.Icon name="lock" color="#777" />
                        }
                    />
                    <View style={{ flexDirection: 'column', marginTop: 10, marginBottom: 40 }}>
                        <Button
                            icon="account-plus-outline"
                            mode="contained"
                            style={{ marginTop: 10, borderWidth: 1, borderColor: '#fff' }}
                            color="#fff"
                            compact={true}
                        >
                            Create a new account
                        </Button>
                        <Button
                            icon="login"
                            mode="text"
                            style={{ marginTop: 10, borderWidth: 1, borderColor: '#fff' }}
                            color="#fff"
                            compact={true}
                            onPress={() => navigation.navigate('LogIn')}
                        >
                            Already have account?
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        // rgba(0, 0, 230, 0.3)
        backgroundColor: '#304FFE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
})
