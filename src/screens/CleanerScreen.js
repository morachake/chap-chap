import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import Header from '../components/Header'
import CleanerCard from '../components/CleanerCard'
import { ScaledSheet } from 'react-native-size-matters';
export default function CleanerScreen() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <Header iconLeft="arrowleft" />
            {isLoading ? (
                <View style={{ alignItems: 'center' }}>
                    <Text>Searching Cleaners </Text>
                    <ActivityIndicator size="large" color="#00748D" />
                </View>
            ) : (
                <>
                    <Text style={styles.heading}>2 Cleaners found</Text>
                    <Text style={styles.subtitle}>Tap to Choose one from Below</Text>
                    <CleanerCard />
                </>
            )
            }

        </View>
    )
}

const styles = ScaledSheet.create({
    heading: {
        fontFamily: 'Poppins-Light',
        fontSize: '32@s',
        color: '#000000',
        marginHorizontal: '10@s',
    },
    subtitle: {
        fontFamily: 'Inter-Light',
        fontSize: '14@s',
        color: '#000000',
        marginHorizontal: '10@s',
    }
})