import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import JobCard from '../components/JobCard';
import {ScaledSheet, scale} from 'react-native-size-matters';

export default function PastJobsScreen() {
  return (
    <View>
      <Header iconLeft="arrowleft" />
      <View style={{marginHorizontal: scale(20)}}>
        <Text style={styles.header}>Past Jobs</Text>
        <JobCard
          job="Clean House"
          cleaner="John Doe"
          date="Today"
          status="pending"
        />
        <JobCard
          cleaner="Munene"
          job="Mantainance"
          date="9th sep 2020"
          status="pending"
        />
        <JobCard
          cleaner="Munene"
          job="Repair"
          date="9th sep 2020"
          status="cancelled"
        />
        <JobCard
          cleaner="Munene"
          job="Repair"
          date="9th sep 2020"
          status="cancelled"
        />
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  header: {
    fontSize: '32@s',
    color: '#000000',
    fontFamily: 'Inter-Bold',
  },
});
