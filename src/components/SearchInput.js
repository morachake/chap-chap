import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

export default function SearchInput() {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={{backgroundColor: '#FFFF'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={{
            flex: 1,
            borderRadius: scale(25),
            color: 'rgba(0, 0, 0, 0.7)',
            fontFamily: 'Inter-Light',
          }}
          placeholder="Type here"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <Icon
          name="search"
          size={20}
          style={{marginRight: scale(10)}}
          onPress={() => console.log('Searching: ', searchText)}
        />
      </View>
    </View>
  );
}
