import React from 'react'
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native'

export const CarCard = () => {
    return (
        <View style={styles.card}>
            <View>
                <View style={styles.carDetails}>
                    <View style={styles.carDetail}>
                        <Text style={styles.carBrand}>Toyota</Text>
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
                    source={require('../images/car.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '83%',
        height: 350,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 20
    },
    carDetails: {
        width: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    carDetail: {
        width: '50%',
        marginTop: 5,
    },
    carBrand: {
        fontSize: 35,
        color: '#000',
        fontWeight: '800'
    },
    carPrice: {
        fontSize: 35,
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