/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import {IMAGES} from '../constants/index';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import UserDetailsCard from '../components/UserDetailsCard';
import {ScaledSheet} from 'react-native-size-matters';
export default function ProfileScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#008AAD'}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Header iconLeft="arrowleft" />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.username}>Munene Phineas</Text>
          <Image
            source={IMAGES.User}
            alt="User"
            style={{width: 75, height: 75}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
              backgroundColor: '#00748D',
              borderRadius: 8,
            }}
          >
            <Text style={{color: '#FFFF', marginHorizontal: 15, fontSize: 14}}>
              Edit
            </Text>
            <EvilIcons name="pencil" size={22} color="#FFFF" />
          </View>
        </View>
      </View>
      <View style={{flex: 2, backgroundColor: '#F5F5F5', alignItems: 'center'}}>
        <UserDetailsCard
          iconame="email"
          headline="Email Adress"
          title="phineas@gmail.com"
        />
        <UserDetailsCard
          iconame="cellphone"
          headline="Phone"
          title="0720000000"
        />
        <UserDetailsCard iconame="id-card" headline="ID Card" title="7858642" />
        <UserDetailsCard
          iconame="lock-open-outline"
          headline="Reset password"
          title="Reset Password"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: '#FD0B0B', fontSize: 14}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  username: {
    fontFamily: 'Poppins-Bold',
    fontSize: '32@s',
  },
  icons: {
    marginHorizontal: '20@s',
  },
  detailscard: {
    alignItems: 'center',
    borderRadius: '8@s',
    flexDirection: 'row',
    //justifyContent: 'space-around',
    width: '90%',
    backgroundColor: '#F5F5F5',
    height: '65@s',
    marginTop: '15@s',
  },
  headlines: {
    color: '#000000',
    padding: '3@s',
  },
  btn: {
    backgroundColor: '#E8E8E8',
    borderRadius: '8@s',
    height: '45@s',
    width: '150@s',
    marginTop: '20@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
