import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import { COLORS } from '../constants/index'

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Header iconLeft="arrowleft" />
            <View style={styles.topContainer}>
                <Text>This is the top container</Text>
                <MainInput label="Type of House" />
                <MainInput label="Number of rooms" />
                <MainInput label="Adress" />
                <MainInput label="Any other Details" />
            </View>
            <View style={styles.bottomContainer}>
                <View>
                    <Text style={{ fontSize: 17, color: '#00000080', fontFamily: 'Inter-Medium' }}>Total Price</Text>
                    <Text style={{ fontSize: 15, color: '#00000080', fontFamily: 'Inter-Light' }}>KES 20300 - 20700</Text>

                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: '#FFFF', fontSize: 14 }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    topContainer: {
        flex: 0.9,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 0.1,
        backgroundColor: '#C4F3FF',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        height: 45,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

