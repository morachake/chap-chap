import React from 'react'
import { View, ScrollView, StyleSheet, Image, Text,TouchableOpacity } from 'react-native'
import cleanerData from '../assets/Data/Data'
import Rating from './Rating';
import { ScaledSheet ,scale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
export default function CleanerCard() {
    const navigation = useNavigation();
    const cleanerData = [
        {
            index: '1',
            name: "Moses ",
            distance: '20',
            rating: '4',
            image: require('../assets/images/provider.png'),
            detail:'has been providing cleaning services for 5 years and has received high ratings from clients for their quality of work and professionalism.has been providing cleaning services for   5 years and has received high ratings from clients for their quality of work and professionalism.'
        },
        {
            index: '2',
            name: "Phineas ",
            distance: '20',
            rating: '3',
            image: require('../assets/images/provider.png'),
            detail:'has been providing cleaning services for 5 years and has received high ratings from clients for their quality of work and professionalism.has been providing cleaning services for   5 years and has received high ratings from clients for their quality of work and professionalism.'
        },
        {
            index: '2',
            name: "Munene ",
            distance: '20',
            rating: '1',
            image: require('../assets/images/provider.png'),
            detail:'has been providing cleaning services for 5 years and has received high ratings from clients for their quality of work and professionalism.has been providing cleaning services for   5 years and has received high ratings from clients for their quality of work and professionalism.'
        },
    ];
    return (
        <ScrollView>
            {cleanerData.map((item, index) => (
                <TouchableOpacity
                    
                    onPress={() => navigation.navigate('SingleCleaner',{item :item})}
                    key={index}
                    style={styles.container}
                >
                    <Image source={item.image}
                        resizeMode="cover"
                        style={{ width: scale(90), height: scale(90) ,margin:scale(10)}}
                    />
                    <View style={{padding:10}}>
                        <Text style={styles.textContainer}>{item.name}</Text>
                        <Text style={styles.textContainer1}>Away {item.distance}</Text>
                        <Text style={styles.textContainer2}>
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
        width: '90%',
        height:'106@s'
    },
    textContainer: {
        fontFamily:'Inter-Medium',
        marginVertical:'4@s',
        color: '#000000',
        fontSize:'14@s',
    },
    textContainer1: {
        fontFamily:'Inter-light',
        color: 'rgba(0, 0, 0, 0.6)',
        fontsize: '14@s',
    },
    textContainer2: {
        fontFamily:'Inter-light',
        color: '#000000',
        fontsize: '14@s',
    }
})