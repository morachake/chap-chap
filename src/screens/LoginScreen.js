import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import Btn from '../components/Btn';
import {COLORS} from '../constants';
export default function LoginScreen() {
  return (
    <View style={{display: 'flex', backgroundColor: '#F5F5F5'}}>
      <Header pagename="Home" iconLeft="arrowleft" />
      <Text style={styles.heading}>Create new password</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <MainInput label="New password" />
        <MainInput label="Confirm password" />
      </View>
      <View style={{flexDirection: 'row', margin: 20}}>
        <Text style={styles.text}>Already have an account ?</Text>
        <Text style={styles.text2}>Login</Text>
      </View>
      <View style={styles.btncontainer}>
        <Btn title="Login" />
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={styles.text}>Already have an account</Text>
          <Text style={styles.text2}>Login</Text>
        </View>
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
    marginTop: '40%',
    bottom: 0,
  },
  text: {
    fontSize: 14,
    color: '#000',
    paddingHorizontal: 5,
  },
  text2: {
    fontSize: 14,
    color: COLORS.primary,
  },
});
