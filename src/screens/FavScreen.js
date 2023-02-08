import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import JobCard from '../components/JobCard';
import { COLORS } from '../constants/index';
import { ScaledSheet } from 'react-native-size-matters';

export default function FavScreen() {
    return (
        <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
            <Header iconLeft="arrowleft" />
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.header}> Favourites</Text>
                <JobCard cleaner="Munene" job="Cleaning" date="9th sep 2020" />
                <JobCard cleaner="Munene" job="Repair" date="9th sep 2020" />
                <JobCard cleaner="Munene" job="Mantainance" date="9th sep 2020" />

                <View style={{ alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: '#FFFF', fontSize: 14 }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}


const styles = ScaledSheet.create({
    header: {
        fontSize: '32@s',
        color: '#000000',
        fontFamily: 'Inter-Bold'
    },
    btn: {
        backgroundColor: COLORS.primary,
        borderRadius: '8@s',
        height: '45@s',
        width: '150@s',
        marginTop: '20@s',
        alignItems: 'center',
        justifyContent: 'center'
    }
})