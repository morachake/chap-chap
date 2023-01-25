import React from 'react'
import { View, ScrollView, StyleSheet, Image , Text} from 'react-native'

export default function CleanerCard(image,name,distance,rating) {
    return (
        <ScrollView style={{ height: 106, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Image source={{uri: image}} style={{ flex: 1, width: null, height: null }} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', padding: 13 }}>
          <Text style={{ fontWeight: 'bold' }}>{name}</Text>
          <Text>Distance: {distance} miles</Text>
          <Text>Rating: {rating}/5</Text>
        </View>
      </ScrollView>
    )
}
const styles = StyleSheet.create({

})