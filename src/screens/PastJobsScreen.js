import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import JobCard from '../components/JobCard';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default function PastJobsScreen() {
    return (
        <View >
            <Header iconLeft="arrowleft" />
            <View style={{ marginHorizontal: scale(20), }}>
                <Text style={styles.header}>Past Jobs</Text>
                <JobCard cleaner="Munene" job="Cleaning" date="9th sep 2020"/>
                <JobCard cleaner="Munene" job="Repair" date="9th sep 2020"/>
                <JobCard cleaner="Munene" job="Mantainance" date="9th sep 2020"/>
            </View>

        </View>
    );
}


const styles = ScaledSheet.create({
    header: {
        fontSize: '32@s',
        color: '#000000',
        fontFamily: 'Inter-Medium'
    }
})