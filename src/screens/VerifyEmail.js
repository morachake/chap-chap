import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import Btn from '../components/Btn';
import {ScaledSheet} from 'react-native-size-matters';
export default function VerifyEmail({navigation}) {
  return (
    <TouchableWithoutFeedback>
      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <Header iconLeft="arrowleft" iconright={undefined} />
        <Text style={styles.heading}>Verify Your Email</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <MainInput label="Verification code" onChangeText={undefined} />
        </View>
        <View style={styles.btncontainer}>
          <Btn title="Verify" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = ScaledSheet.create({
  heading: {
    fontFamily: 'Inter-Bold',
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
