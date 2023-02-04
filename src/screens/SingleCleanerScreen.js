import React from 'react'
import { View, Text, Image } from 'react-native'
import Header from '../components/Header'
import { ScaledSheet, scale } from 'react-native-size-matters'
import Rating from '../components/Rating'
import Btn from '../components/Btn'

export default function SingleCleanerScreen({ route }) {
    const { item } = route.params
    return (
        <View>
            <Header iconLeft="arrowleft" />
            <View style={{marginHorizontal:15}}>
                <Text style={{fontSize:scale(32),fontFamily:'Inter-Bold'}}>Confirm selection</Text>
                <Text style={{fontSize:scale(14),fontFamily:'Inter-Medium'}}>You have selected {item.name} .Please confirm to complete</Text>
            </View>
            
            <View style={styles.container}>
                <Image source={item.image} resizeMode="cover" style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.textContainer}>Cleaner Name : {item.name}</Text>
                    <Text style={styles.textContainer}>Distance Away :{item.distance} Kilometres</Text>
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text style={styles.textContainer}>Rating  </Text> 
                        <Text style={styles.textContainer}><Rating initialValue={item.rating} /></Text>
                        <Text style={{fontSize:scale(13)}}>Star</Text>
                    </View>                   
                </View>
                <Text style={styles.textContainer}>Other Details</Text>
                <Text style={styles.textDetail}>
                    {item.name}
                    has been providing cleaning services for
                    5 years and has received high ratings from clients for their quality of work and professionalism.has been providing cleaning services for
                    5 years and has received high ratings from clients for their quality of work and professionalism.
                </Text>
                <Btn  title="Confirm Selection"/>             
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:'10@s'
      },
      image: {
        width: scale(150),
        height: scale(150),
        margin: scale(10),
        borderRadius: 80,
    },
    infoContainer: {
        alignItems: 'center',
        padding: '10@s',
        
      },
      textContainer: {
          fontSize: '14@s',
          fontFamily: 'Inter-Medium',
          padding: '3@s',
    },
    textDetail: {
        fontSize: '12@s',
        fontFamily: 'Inter-Medium',
        marginBottom:'20@s'
    },
     
})