import React from 'react'
import { View, ScrollView, StyleSheet, Image, Text,TouchableOpacity } from 'react-native'
import cleanerData from '../assets/Data/Data'
import Rating from './Rating';
import { ScaledSheet ,scale} from 'react-native-size-matters';
export default function CleanerCard() {

    const cleanerData = [
        {
            index: '1',
            name: "Moses ",
            distance: '20',
            rating: '4',
            image: require('../assets/images/provider.png')
        },
        {
            index: '2',
            name: "Moses ",
            distance: '20',
            rating: '3',
            image: require('../assets/images/provider.png')
        },
        {
            index: '2',
            name: "Moses ",
            distance: '20',
            rating: '1',
            image: require('../assets/images/provider.png')
        },
    ];
    return (
        <ScrollView>
            {cleanerData.map((item, index) => (
                <TouchableOpacity key={index} style={styles.container} >
                    <Image source={item.image}
                        resizeMode="cover"
                        style={{ width: scale(100), height: scale(100) ,margin:scale(10)}}
                    />
                    <View style={{padding:10}}>
                        <Text style={styles.textContainer}>{item.name}</Text>
                        <Text style={styles.textContainer}>{item.distance}</Text>
                        <Text style={styles.textContainer}>
                            <Rating initialValue={item.rating} />
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
const styles = ScaledSheet.create({
    container: {
        marginHorizontal: '10@s',
        marginBottom: '10@s',
        borderWidth: 1,
        borderRadius: '12@s',
        borderColor: '#D9D9D9',
        flexDirection: 'row',
        width : '90%'
    },
    textContainer: {
        marginVertical:'4@s'
    }
})