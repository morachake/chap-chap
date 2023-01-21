import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Btn from '../components/Btn';
import MainInput from '../components/MainInput';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Btn title="Sign Up" onPress={undefined} />
      <MainInput label='Your Name' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter-bold',
  },
});
