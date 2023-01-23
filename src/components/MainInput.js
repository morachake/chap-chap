import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export default function MainInput({label}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    marginTop: 10,
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: 13,
    fontFamily: 'Inter-Medium',
  },
  textInput: {
    marginTop: 10,
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 6,
  },
});
