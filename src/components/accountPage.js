import React, { useEffect } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const AccountPage = () => {

    const offset = useSharedValue(0)
    const navigation = useNavigation()
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * 255 }],
        };
    });

    useEffect(() => {
        offset.value = withSpring(Math.random())
        // return () => {
        //     offset.value = withSpring(Math.random())
        // }
    }, [])

    return (
        <Animated.View style={[styles.container, animatedStyles]}>
            <Text
                style={{
                    fontSize: 45,
                    fontWeight: '700',
                    color: '#000',
                    marginTop: 20
                }}
            >
                Account
            </Text>
            <View style={styles.accountInfo}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={{
                            width: 75,
                            height: 75,
                            alignSelf: 'center',
                        }}
                        source={require('../images/24-248253_user-profile-default-image-png-clipart-png-download.png')}
                    />
                </View>
                <View style={styles.personInfo}>
                    <View style={styles.personFullname}>
                        <Text style={styles.text}>James</Text>
                        <Text
                            style={{
                                ...styles.text,
                                marginLeft: 10,
                            }}
                        >
                            Warden
                        </Text>
                    </View>
                    <View style={styles.personStatus}>
                        <Text
                            style={{
                                color: 'blue',
                                fontWeight: '600',
                                fontSize: 15
                            }}
                        >
                            Premium member
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.menuList}>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigation.navigate("AccountOrders")}>
                        <Text style={styles.menuItemText}>Orders</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigation.navigate("AccountInformation")}>
                        <Text style={styles.menuItemText}>Account information</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Security and settings</Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Help</Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Messages</Text>
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: '#FDFEFF'
    },
    accountInfo: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageWrapper: {
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: 'center',
        marginRight: 20
    },
    personFullname: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: '700'
    },
    menuList: {
        marginTop: 30,
        width: '100%'
    },
    menuItem: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 20
    },
    menuItemText: {
        width: '100%',
        fontSize: 18,
        color: '#000',
        fontWeight: '600'
    },
})

export default AccountPage