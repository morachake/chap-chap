import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import { ScaledSheet } from 'react-native-size-matters';

export default function Btn({title, onPress, ...props}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = ScaledSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    width: '80%',
    height: '43@s',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5@s',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
