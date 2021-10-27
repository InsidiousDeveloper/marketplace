import React from 'react'
import CarCategoryCard from './carCategoryCard'
import {
    ScrollView
} from 'react-native'

const arrayOfCarsCategories = [
    {
        id: 1,
        type: 'Standard',
        count: 56,
        active: true
    },
    {
        id: 2,
        type: 'Prestige',
        count: 16,
        active: false
    },
    {
        id: 3,
        type: 'SUV',
        count: 23,
        active: false
    },
    {
        id: 4,
        type: 'Exclusive',
        count: 7,
        active: false
    },
]

const CarsCategoryList = () => {
    return (
        <ScrollView
            horizontal={true}
            style={{ 
                marginTop: 15,
                backgroundColor: "#EEF2F5"
            }}
            showsHorizontalScrollIndicator={false}
        >
            {
                arrayOfCarsCategories.map(item => {
                    return <CarCategoryCard key={item.id} cardInfo={item} />
                })
            }

        </ScrollView>
    )
}

export default CarsCategoryList