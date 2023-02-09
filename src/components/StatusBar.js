import React from 'react';
import { View, StyleSheet } from 'react-native';

const StatusBar = ({ status }) => {
  let backgroundColor;

  if (status === 'completed') {
    backgroundColor = 'green';
  } else if (status === 'cancelled') {
    backgroundColor = 'red';
  } else {
    backgroundColor = 'yellow';
  }

  return (
    <View style={[styles.statusBar, { backgroundColor }]} />
  );
};

const styles = StyleSheet.create({
  statusBar: {
    width: '100%',
    height: 10,
  },
});

export default StatusBar;
