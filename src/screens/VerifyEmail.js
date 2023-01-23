import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import Btn from '../components/Btn';
export default function VerifyEmail() {
  return (
    <View style={{display: 'flex', backgroundColor: '#F5F5F5'}}>
      <Header pagename="Home" iconLeft="arrowleft" iconright={undefined} />
      <Text style={styles.heading}>Verify Your Email</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <MainInput label="Verification code" />
      </View>
      <View style={styles.btncontainer}>
        <Btn title="Verify" />
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
    marginTop: '75%',
    bottom: 0,
  },
});
