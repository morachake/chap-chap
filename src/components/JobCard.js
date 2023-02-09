import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';

export default function JobCard({job, cleaner, date, status}) {
  const StatusBar = ({status}) => {
    let backgroundColor;

    if (status === 'pending') {
      backgroundColor = 'green';
    } else if (status === 'cancelled') {
      backgroundColor = 'red';
    } else {
      backgroundColor = '';
    }

    return <View style={[styles.statusBar, {backgroundColor}]} />;
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#E2E2E2',
          padding: 5,
          marginTop: 7,
        }}
      >
        <View style={{flex: 1}}>
          <Text style={{fontSize: scale(14), fontFamily: 'Inter-SemiBold'}}>
            {job}
          </Text>
          <Text style={{fontSize: scale(12), fontFamily: 'Inter-Light'}}>
            {cleaner}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              fontSize: scale(12),
              margin: scale(20),
              fontFamily: 'Poppins-Italic',
            }}
          >
            {date}
          </Text>
          <StatusBar status={status} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  statusBar: {
    width: '10@s',
    height: '10@s',
    borderRadius: '5@s',
  },
});
