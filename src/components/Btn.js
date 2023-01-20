import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/index';
export default function Btn({title,onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    btn: {
            padding:2,
            backgroundColor: COLORS.primary,
            width: '80%',
            height: 44,
            color: '#FFFF',
            borderRadius: 8,
            alignItems:'center',
        },
    title: {
            color: '#FFFF',
            fontFamily: 'Inter-Medium',
            fontSize:14
    },

});
