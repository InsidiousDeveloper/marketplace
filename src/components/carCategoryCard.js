import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
import {
    Paragraph,
    Subheading,
    Text,
    Caption
} from 'react-native-paper'


const CarCategoryCard = ({ cardInfo }) => {
    return (
        <View style={styles.card}>
            <Image
                style={{
                    width: 150,
                    height: 70,
                    position: 'absolute',
                    left: -15,
                    top: 15,
                    zIndex: 5
                }}
                source={require('../images/car.png')}
            />
            <View style={{
                ...styles.content, 
                backgroundColor: cardInfo.active ? '#304FFE' : '#fff',
            }}>
                <Subheading style={{
                    ...styles.category,
                    color: cardInfo.active ? '#fff' : '#000'
                }}>{cardInfo.type}</Subheading>
                <Caption style={{
                    ...styles.count,
                    color: cardInfo.active ? '#fff' : '#000'
                }}>{cardInfo.count}</Caption>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        alignItems: 'flex-end',
        height: 150,
        width: 150,
        marginLeft: 20,
        elevation: 30
    },
    content: {
        height: '100%',
        width: '90%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 20,
    },
    category: {
        fontWeight: '700',
        fontSize: 20
    },
    count: {
        fontSize: 15,
        marginBottom: 10
    },
})

export default CarCategoryCard