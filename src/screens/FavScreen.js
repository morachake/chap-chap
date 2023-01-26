import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import JobCard from '../components/JobCard';
import {COLORS} from '../constants/index';

export default function FavScreen() {
    return (
        <View>
            <Header iconLeft="arrowleft" />
            <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                <Text style={styles.header}> Favourites</Text>
                <JobCard cleaner="Munene" job="Cleaning" date="9th sep 2020" />
                <JobCard cleaner="Munene" job="Repair" date="9th sep 2020" />
                <JobCard cleaner="Munene" job="Mantainance" date="9th sep 2020" />


                <TouchableOpacity style={styles.btn}>
                    <Text style={{color: '#FFFF', fontSize: 14 }}>Log Out</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        color: '#000000',
        fontFamily: 'Inter-Medium'
    },
    btn: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        height: 45,
        width: 150,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})