import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header({pagename, iconright, iconLeft}) {
  return (
    <View style={styles.container}>
      <Icon name={iconLeft} size={30} style={styles.icons} />
      <Text style={styles.pagename}>{pagename}</Text>
      <Icon name={iconright} size={25} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 54,
  },
  pagename: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
  icons: {},
});
