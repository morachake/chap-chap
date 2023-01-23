import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import Btn from '../components/Btn';
export default function RegisterScreen() {
  return (
    <View style={{display: 'flex', backgroundColor: '#F5F5F5'}}>
      <Header iconLeft="arrowleft" iconright={undefined} />
      <Text style={styles.heading}>Register</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <MainInput label="Your Name" />
        <MainInput label="Your Email Adress" />
      </View>
      <View style={styles.btncontainer}>
        <Btn  title="Register" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#000000',
    margin: 20,
  },
  btncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '55%',
    bottom: 0,
  },
});
