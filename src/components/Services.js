import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import servicesData from '../assets/Data/Data'
export default function Services() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {servicesData.map((item, index) => (
                <View key={index} style={{ padding: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{
                        borderRadius: 40, width: 60,
                        height: 60, borderWidth: 1, borderColor: '#111', overflow: 'hidden'
                    }}>
                        <Image source={item.image} resizeMode='cover' style={styles.image} />
                    </View>
                    <Text
                        style={{
                            marginTop: 10,
                            textAlign: 'center',
                            color: '#000000',
                            fontSize: 12
                        }}
                    >
                        {item.title}
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 32,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#111'
    },
    image: {
        width: 40,
        height: 40,


    }
})