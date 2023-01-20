import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/index';
export default function Btn({title}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    width: '80%',
    height: 44,
    color: '#FFFF',
    borderRadius: 6,
    alignItems:'center',
    },
title: {
    color: '#FFFF',
    fontFamily: 'Inter-Medium',
    fontSize:14
},

});
