import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, IMAGES} from '../constants';
import SearchInput from '../components/SearchInput';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#EAFFFF'}}>
        <View style={styles.header}>
          <Text style={{justifyContent: 'center'}}>
            <Text style={styles.firstThree}>Chap</Text>
            <Text style={styles.rest}>Chap</Text>
          </Text>
          <Image
            source={IMAGES.User}
            resizeMode="cover"
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.user}>Hi James,</Text>
          <Text style={styles.service}>What Services do you need today?</Text>
         <SearchInput />
        </View>
      </View>
      <View style={{flex: 1.5, backgroundColor: '#FFFFFF'}}>
        <Text>Bottom Half</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
  },
  topcontainer: {
    backgroundColor: COLORS.lightPrimary,
  },
  firstThree: {
    color: '#00748D',
    fontFamily: 'Poppins-BoldItalic',
    fontSize: 18,
  },
  rest: {
    color: '#041747',
    fontFamily: 'Poppins-BoldItalic',
    fontSize: 18,
  },
  user: {
    paddingTop: 10,
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: '##000000',
  },
  service: {
    paddingTop: 10,
    fontSize: 24,
    fontFamily: 'Poppins-LightItalic',
  },
});
