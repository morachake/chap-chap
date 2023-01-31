import React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
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


const styles = ScaledSheet.create({
    icons: {
        marginHorizontal: '20@s'
    },
    detailscard: {
        alignItems: 'center',
        borderRadius: '8@s',
        flexDirection: 'row',
        //justifyContent: 'space-around',
        width: '90%',
        backgroundColor: '#F5F5F5',
        height: '65@s',
        marginTop: '15@s'
    },
    headlines: {
        color: '#000000',
        padding: '3@s',
    }
})