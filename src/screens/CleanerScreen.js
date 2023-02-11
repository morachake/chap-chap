import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import Header from '../components/Header';
import CleanerCard from '../components/CleanerCard';
import {ScaledSheet, scale} from 'react-native-size-matters';
export default function CleanerScreen() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <Header iconLeft="arrowleft" />
      {isLoading ? (
        <View style={{marginHorizontal: scale(10)}}>
          <Text style={styles.heading}>
            Finding Cleaners
          </Text>
          <Text style={styles.subtitle}>
            This may take 1-2 minutes please be patient
          </Text>
          <ActivityIndicator size="large" color="#00748D" />
        </View>
      ) : (
        <>
          <Text style={styles.heading}>2 Cleaners found</Text>
          <Text
            style={{
              margin: scale(8),
              fontFamily: 'Inter-Light',
              fontSize: scale(14),
              color: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            Tap to Choose one from Below
          </Text>
          <CleanerCard />
        </>
      )}
    </View>
  );
}

const styles = ScaledSheet.create({
  heading: {
    fontFamily: 'Inter-Bold',
    fontSize: '32@s',
    color: '#000000',
    marginHorizontal: '10@s',
  },
  subtitle: {
    fontFamily: 'Inter-Light',
    fontSize: '14@s',
    color: 'rgba(0, 0, 0, 0.7)',
  },
});
