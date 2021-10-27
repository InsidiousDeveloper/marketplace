import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
    Image,
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native'
// navigation.navigate("CarDetails")

const TouchableCarCard = (WrappedComponent) => (props) => {
    const navigation = useNavigation()

    return <Pressable onPress={() => navigation.navigate("CarDetails")}>
        <WrappedComponent {...props} />
    </Pressable>

}

export const CarCard = () => {
    return (

        <View style={styles.card}>
            <View>
                <View style={styles.carDetails}>
                    <View style={styles.carDetail}>
                        <Text style={styles.carBrand}>Chevrolet</Text>
                    </View>
                    <View style={styles.carDetail}>
                        <Text style={styles.carPrice}>$350</Text>
                    </View>
                    <View style={styles.carDetail}>
                        <Text style={styles.carModel}>Yaris</Text>
                    </View>
                    <View style={styles.carDetail}>
                        <Text style={styles.rentPeriod}>/month</Text>
                    </View>
                    <View style={styles.carDetail}>
                        <Text style={styles.engineText}>Engine</Text>
                    </View>
                    <View style={styles.carDetail}>
                        <Text style={styles.engineInfo}>4-Cyl 1.5 Liter</Text>
                    </View>
                </View>
            </View>
            <View style={styles.imageWrapper}>
                <Image
                    style={{
                        width: 300,
                        height: 150,
                    }}
                    source={require('../../images/car.png')}
                />
            </View>
        </View>
    )
}

export const Car = TouchableCarCard(CarCard)

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '83%',
        height: 350,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 7,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 20
    },
    carDetails: {
        width: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    carDetail: {
        width: '50%',
        marginTop: 5,
    },
    carBrand: {
        fontSize: 28,
        color: '#000',
        fontWeight: '800'
    },
    carPrice: {
        fontSize: 33,
        color: 'blue',
        textAlign: 'right',
        fontWeight: '300',
    },
    engineText: {
        color: '#000',
        fontSize: 16
    },
    rentPeriod: {
        textAlign: 'right'
    },
    engineInfo: {
        color: '#000',
        fontSize: 16,
        textAlign: 'right'
    },
    imageWrapper: {
        height: 170,
    },
})