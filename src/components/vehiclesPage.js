import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {
    Text,
    Searchbar
} from 'react-native-paper'
import CarsCategoryList from './carsCategoryList'
import CarsList from './carsList'

const VehiclesPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    <TextInput
                        placeholder="Search for a car"
                        placeholderTextColor="#000"
                        style={styles.searchbar}
                    />
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicon
                            name="ios-search-outline"
                            size={30}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
                <CarsCategoryList />
                <CarsList />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9FA'
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBtn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        transform: [{ translateX: -35 }, { translateY: -10 }]
    },
    searchbar: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: '90%',
        marginTop: 25,
        paddingLeft: 20,
    },
})

export default VehiclesPage