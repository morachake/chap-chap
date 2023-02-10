import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import Btn from '../components/Btn';
export default function ResetPassword({navigation}) {
  return (
    <TouchableWithoutFeedback>
      <View style={{display: 'flex', backgroundColor: '#F5F5F5'}}>
        <Header iconLeft="arrowleft" iconright={undefined} />
        <Text style={styles.heading}>Create new password</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <MainInput label="New password" />
          <MainInput label="Confirm password" />
        </View>
        <View style={styles.btncontainer}>
          <Btn title="Finish" onPress={() => navigation.navigate('Verify')} />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
