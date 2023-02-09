import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header({pagename, iconright, iconLeft}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon name={iconLeft} size={30} onPress={() => navigation.goBack()} />
      <Text style={styles.pagename}>{pagename}</Text>
      <Icon name={iconright} size={25} />
    </View>
  );
}
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10@s',
    height: '54@s',
  },
  pagename: {
    fontFamily: 'Inter-Bold',
    fontSize: '18@s',
  },
});
