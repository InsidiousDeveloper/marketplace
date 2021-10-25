import { BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/core"

const Button = () => {
    return <TouchableOpacity style={styles.buttonBackground}>
        <Text style={styles.buttonText}>
            Talk with landboard
        </Text>
    </TouchableOpacity>
}

const CarDetails = ({ navigation }) => {


    useEffect(() => {

        const backAction = () => {
            navigation.navigate('CarList')
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [])

    return <View style={styles.main}>
        <Text style={styles.headerText}>Toyota</Text>
        <View style={styles.image}>
            <Image
                style={styles.image}
                // ./../images/car.png
                source={require('../../images/car.png')}
            />
        </View>

        <View>
            <Text style={styles.blackText}>
                Color
            </Text>
            <View>
                {/* color pallitra */}
            </View>
        </View>
        <View>
            <Text style={styles.blackText}>
                Brand
            </Text>
            <Text style={styles.description}>
                smth about brand
            </Text>
        </View>
        <View>
            <Text style={styles.blackText}>
                Contacts
            </Text>
            <Text style={styles.description}>
                +998 (xx) xxx - xx -xx
            </Text>
        </View>
        <Button />
    </View>
}

export default CarDetails

const styles = StyleSheet.create({
    main: {
        widht: "100%",
        height: "100%",
        backgroundColor: "#fff",
        paddingLeft: 40

    },
    headerText: {
        color: "#000",
        fontSize: 34,
        marginLeft: 20,
        marginTop: 30,
        fontWeight: "bold"
    },
    image: {
        width: 300,
        height: 150,
        display: "flex",
        // marginLeft: 30
        // textAlign: "center"
        // justifyContent: "space-between"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    blackText: {
        marginTop: 25,
        color: "#000",
        fontSize: 18,
        fontWeight: "bold"

    },
    description: {
        color: "#000",
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    buttonText: {
        color: "#A7A9BE"
    },
    buttonBackground: {
        marginTop: 50,
        backgroundColor: "blue",
        width: 350,
        height: 50,
        borderRadius: 4
    },
    buttonText: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    }
})