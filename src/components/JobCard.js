import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';

export default function JobCard({job, cleaner, date, status}) {
  const StatusBar = ({status}) => {
    let textColor;

    if (status === 'pending') {
      textColor = 'green';
    } else if (status === 'cancelled') {
      textColor = 'red';
    } else {
      textColor = '';
    }

    return <Text style={[styles.statusBar, {color: textColor}]}>{status}</Text>;
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#E2E2E2',
          padding: scale(5),
          marginTop: scale(10),
          height: scale(65),
        }}
      >
        <View style={{flex: 1}}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: scale(14),
              fontFamily: 'Inter-SemiBold',
              color: '#000000',
            }}
          >
            {job}
          </Text>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: scale(12),
              fontFamily: 'Inter-Light',
              color: '#000000',
            }}
          >
            {cleaner}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatusBar status={status} />
          <Text
            style={{
              fontSize: scale(12),
              margin: scale(4),
              fontFamily: 'Poppins-Italic',
              color: '#000000',
            }}
          >
            {date}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  statusBar: {
    fontSize: scale(12),
    marginHorizontal: scale(4),
    fontFamily: 'Poppins-Italic',
  },
});
