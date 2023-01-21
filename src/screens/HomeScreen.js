import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';
import {IMAGES} from '../constants/index';
import Btn from '../components/Btn';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={IMAGES.Cleaner} style={styles.banner} />
      <View>
        <Text style={styles.textAd}>Best Home Services for You</Text>
        <Btn title="Register" />
      </View>
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
  textAd: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#000000',
  },
});
