import React from 'react'
import Animated, { SlideInRight, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import Ionicon from 'react-native-vector-icons/Ionicons'
import CarsCategoryList from './carsCategoryList'
import CarsList from './carsList'
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'

const VehiclesPage = () => {

    const windowWidth = Dimensions.get('screen').width
    const initialWidth = useSharedValue(windowWidth / 1.8)

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: initialWidth.value * 1
        }
    })

    function inputFocused() {
        initialWidth.value = withSpring(windowWidth - windowWidth * 0.05)
    }

    function inputBlurred() {
        initialWidth.value = withSpring(windowWidth / 1.8)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <Animated.View entering={SlideInRight} style={[styles.searchWrapper, animatedStyles]}>
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor="#000"
                        style={styles.searchbar}
                        onFocus={inputFocused}
                        onBlur={inputBlurred}
                    />
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicon
                            name="ios-search-outline"
                            size={30}
                            color="#000"
                        />
                    </TouchableOpacity>
                </Animated.View>
                <CarsCategoryList />
                <CarsList />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF2F5'
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchWrapper: {
        alignItems: 'center',
        position: 'relative',
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
        marginTop: 15,
        paddingLeft: 20,
    },
})

export default VehiclesPage