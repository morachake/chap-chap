import React from 'react'
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { IMAGES } from '../constants/index'
import { useNavigation } from '@react-navigation/native'
import { ScaledSheet, scale } from 'react-native-size-matters'
export default function ServiceCard() {
    const navigation= useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.container}>
                <View style={{borderRadius: scale(20)}}>
                    <Image source={IMAGES.Cleaner} resizeMode='cover' style={{resizeMode :'cover', width: scale(150), height: '100%'}} />
                </View>
                <View style={{justifyContent:'center',marginLeft :15}}>
                    <Text style={styles.titles1}>10 Services Avalilable</Text>
                    <Text style={styles.titles}>24+ Vendors Avalilable</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = ScaledSheet.create({
    container: {
        height:'90@s',
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        marginHorizontal: '15@s',
        borderRadius:'12@s'
    },
    titles1: {
        fontSize: '12@s',
        fontFamily: 'Poppins-Light',
        padding:'5@s'
    },
    titles: {
        fontSize: '11@s',
        fontFamily: 'Poppins-Light',
        
    }
    })