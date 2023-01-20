import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Btn from '../components/Btn';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Btn title='Sign Up' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter-bold',
  },
});
