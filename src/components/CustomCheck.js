import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Fontisto  from 'react-native-vector-icons/Fontisto';


export default function CustomCheck ({ value, onValueChange }) {
  return (
    <TouchableWithoutFeedback onPress={() => onValueChange(!value)}>
      <View>
        <Fontisto
          name={value ? 'checkbox-passive' : 'checkbox-active'}
          size={20}
          color="black"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};