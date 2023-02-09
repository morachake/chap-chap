import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {IMAGES, COLORS} from '../constants/index';
import Btn from '../components/Btn';

export default function SplashScreen({navigation}) {
  return (
    <ImageBackground source={IMAGES.Cleaner} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.textAd}>Best Home Services for You</Text>
        <Btn title="Register" onPress={() => navigation.navigate('Register')} />
        <View style={styles.bottomcont}>
          <Text style={styles.text}>Already have an account</Text>
          <Text
            style={styles.text2}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = ScaledSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textAd: {
    fontSize: '32@s',
    fontFamily: 'Inter-Bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: '20@s',
  },
  text: {
    fontSize: '14@s',
    color: '#000',
  },
  text2: {
    fontSize: '14@s',
    color: COLORS.primary,
  },
  bottomcont: {
    flexDirection: 'row',
    margin: '4@s',
  },
});
