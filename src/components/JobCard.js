import React from 'react';
import { View, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function JobCard({job,cleaner,date}) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#111', padding: 5,marginTop:7 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: scale(14), fontFamily: 'Inter-Medium' }}>{job }</Text>
                <Text style={{ fontSize: scale(12), fontFamily: 'Inter-Light' }}>{cleaner}</Text>
            </View>
            <Text style={{ fontSize: scale(12), marginLeft: scale(20), fontFamily: 'Inter-Italic' }}>{date}</Text>
        </View>
    );
}
