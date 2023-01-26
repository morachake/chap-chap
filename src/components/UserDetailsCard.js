import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function UserDetailsCard({ iconame, headline, title }) {
    return (
        <View style={styles.detailscard}>
            <MaterialCommunityIcons name={iconame} size={30} color="#00748D" style={styles.icons} />
            <View>
                <Text style={{ fontFamily: 'Inter-Bold', ...styles.headlines }}>{headline}</Text>
                <Text style={{ fontFamily: 'Inter-Italic', ...styles.headlines }}>{title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    icons: {
        marginHorizontal: 20
    },
    detailscard: {
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        //justifyContent: 'space-around',
        width: '90%',
        backgroundColor: '#F5F5F5',
        height: 65,
        marginTop: 15
    },
    headlines: {
        color: '#000000',
        padding: 3,
    }
})