import React, { useState } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { TOGGLE_AUTH } from '../redux/types'

export const LogIn = ({ navigation }) => {

    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://thumbs.dreamstime.com/b/purple-blue-textured-background-wallpaper-app-background-layout-dark-gradient-colors-vintage-distressed-elegant-78118630.jpg' }}
                style={{ flex: 1, width: '100%', justifyContent: 'center' }}
            >
                <View style={styles.wrapper}>
                    <Icon name="location-pin" style={{marginBottom: 30}} size={95} color="#fff"/>
                    <Text style={{color: 'white', marginBottom: 15, fontSize: 30}}>Drival</Text>
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
                    <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 40}}>
                        <Button 
                            icon="account-plus-outline" 
                            mode="text" 
                            style={{marginTop: 10, marginRight: 10, borderWidth: 1, borderColor: '#fff'}} 
                            color="#fff"
                            compact={true}
                            onPress={() => navigation.navigate('SignIn')}
                        >
                            Create Account
                        </Button>
                        <Button 
                            icon="login" 
                            mode="contained" 
                            onPress={dispatch({type: TOGGLE_AUTH})}
                            style={{marginTop: 10, backgroundColor: '#212121'}}
                        >
                            Log In
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
