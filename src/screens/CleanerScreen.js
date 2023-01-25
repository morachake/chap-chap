import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../components/Header'
import CleanerCard from '../components/CleanerCard'
export default function CleanerScreen() {
    return (
        <View style={{flex: 1, backgroundColor: '#F5F5F5' }}>
            <Header iconLeft="arrowleft" />
            <Text style={styles.heading}>2 Cleaners found</Text>
            <Text style={styles.subtitle}>Tap to Choose one from Below</Text>
            <CleanerCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Poppins-Light',
        fontSize: 32,
        color: '#000000',
        marginHorizontal: 10,
    },
    subtitle: {
        fontFamily: 'Inter-Light',
        fontSize: 14,
        color: '#000000',
        marginHorizontal: 10,
    }
})