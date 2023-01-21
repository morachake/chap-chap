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
    flexDirection: 'row',
  },
  label: {},
  textInput: {},
});
