import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { IMAGES } from '../constants/index'
export default function ServiceCard() {
    return (
        <ScrollView >
            <View style={{flexDirection:'row',backgroundColor:'#F5F5F5'}}>
                <View>
                    <Image source={IMAGES.Cleaner} style={{ width: 150, height: 60 }} />
                </View>
                <View style={{justifyContent:'space-around'}}>
                    <Text>10 Services Avalilable</Text>
                    <Text>244+ Vendors Avalilable</Text>
                </View>
            </View>
        </ScrollView>
    )
}
