import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {IMAGES, COLORS} from '../constants/index';
import Btn from '../components/Btn';

export default function HomeScreen() {
  return (
    <ImageBackground source={IMAGES.Cleaner} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.textAd}>Best Home Services for You</Text>
        <Btn title="Register" onPress={undefined} />
        <View style={{flexDirection: 'row', margin: 3}}>
          <Text style={styles.text}>Already have an account</Text>
          <Text style={styles.text2}>Login</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textAd: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  text2: {
    fontSize: 14,
    color: COLORS.primary,
  },
});
