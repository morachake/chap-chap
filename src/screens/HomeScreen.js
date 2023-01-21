import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {IMAGES} from '../constants/index';
import Btn from '../components/Btn';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={IMAGES.Cleaner} style={styles.banner} />
      <Btn title="Register" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  banner: {
    resizeMode: 'cover',
    width: '100%',
    height: '90%',
  },
});
