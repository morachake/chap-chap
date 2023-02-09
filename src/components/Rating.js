import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {scale} from 'react-native-size-matters';

export default function Rating({initialValue}) {
  const [rating, setRating] = useState(initialValue);

  return (
    <View style={{flexDirection: 'row'}}>
      {[1, 2, 3, 4, 5].map((value, index) => {
        const active = value <= rating;
        return (
          <TouchableOpacity key={index} onPress={() => setRating(value)}>
            <Text
              style={{color: active ? 'gold' : 'gray', fontSize: scale(22)}}
            >
              {active ? '★' : '☆'}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
