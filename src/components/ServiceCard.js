import React from 'react'
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { IMAGES } from '../constants/index'
import { useNavigation } from '@react-navigation/native'
export default function ServiceCard() {
    const navigation= useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Cleaner')}>
            <View style={styles.container}>
                <View style={{borderRadius: 20}}>
                    <Image source={IMAGES.Cleaner} resizeMode='cover' style={{resizeMode :'cover', width: 150, height: '100%'}} />
                </View>
                <View style={{justifyContent:'center',marginLeft :15}}>
                    <Text style={styles.titles1}>10 Services Avalilable</Text>
                    <Text style={styles.titles}>244+ Vendors Avalilable</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height:90,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        marginHorizontal: 15,
        borderRadius:20
    },
    titles1: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        padding:5
    },
    titles: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        
    }
    })