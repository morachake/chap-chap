import React from 'react'
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native'
import cleanerData from '../assets/Data/Data'
export default function CleanerCard() {

    const cleanerData = [
        {
            index: '1',
            name: "Moses ",
            distance: '20',
            rating: '2',
            image: '../assets/images/provider.png'
        },
    ];
    return (
        <ScrollView style={styles.container}>
            {cleanerData.map((item, index) => (
                <View key={index} >
                    <Image source={item.image}
                        resizeMode="cover"
                        style={{ width: 100, height: 100 }}
                    />
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.distance}</Text>
                        <Text>{item.rating}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 106,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#D9D9D9',
        width: '60%'
    }
})