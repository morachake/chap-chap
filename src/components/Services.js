import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import servicesData from '../assets/Data/Data';
import {ScaledSheet, scale} from 'react-native-size-matters';
export default function Services() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {servicesData.map((item, index) => (
        <View
          key={index}
          style={{
            marginHorizontal: scale(20),
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              borderRadius: scale(20),
              width: scale(40),
              justifyContent: 'center',
              alignItems: 'center',
              height: scale(40),
              borderWidth: 1,
              borderColor: '#111',
              overflow: 'hidden',
            }}
          >
            <Image
              source={item.image}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Text
            style={{
              marginTop: scale(7),
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 0.6)',
              fontSize: 12,
            }}
          >
            {item.title}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: '32@s',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#111',
    padding: '10@s',
  },
  image: {
    width: '28@s',
    height: '28@s',
  },
});
