import React, { useState } from 'react'
import { View, Text, Image, Modal, Button, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { ScaledSheet, scale } from 'react-native-size-matters'
import Rating from '../components/Rating'
import Btn from '../components/Btn'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SingleCleanerScreen({ route }) {
    const { item } = route.params
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Header iconLeft="arrowleft" />
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ fontSize: scale(32), fontFamily: 'Inter-Bold' }}>Confirm selection</Text>
                <Text style={{ fontSize: scale(14), fontFamily: 'Inter-Medium' }}>You have selected {item.name} .Please confirm to complete</Text>
            </View>

            <View style={styles.container}>
                <Image source={item.image} resizeMode="cover" style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.textContainer}>Cleaner Name : {item.name}</Text>
                    <Text style={styles.textContainer}>Distance Away :{item.distance} Kilometres</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={styles.textContainer}>Rating  </Text>
                        <Text style={styles.textContainer}><Rating initialValue={item.rating} /></Text>
                        <Text style={{ fontSize: scale(13) }}>Star</Text>
                    </View>
                </View>
                <Text style={styles.textContainer}>Other Details</Text>
                <Text style={styles.textDetail}>
                    {item.name}
                    {item.detail}
                </Text>
                <Btn title="Confirm Selection" onPress={() => setModalVisible(true)} />
                {/* cleaner modal start */}
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Button title="Show Modal" onPress={() => setModalVisible(true)} />
                    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: 'white', height: scale(250), width: scale(300), padding: scale(24), borderRadius: scale(8), }}>
                               
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                        <AntDesign size={28} name='close' color='#00748D' />
                                    </TouchableOpacity>
                                    

                                
                                <View style={{flexDirection:'row',justifyContent: 'space-around',alignItems: 'center'}}>
                                    <Image source={item.image} resizeMode="cover" style={styles.imagesmall} />
                                </View>
                                <Text>You selected {item.name} </Text>
                                <Text>Are you sure you want ot continue</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    
                                <Button title="Cancel" onPress={() => setModalVisible(false)} />
                                <Button title="Continue" onPress={() => setModalVisible(false)} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                    </View>
            </View>
            {/* cleaner modal end */}
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '10@s'
    },
    image: {
        width: scale(150),
        height: scale(150),
        margin: scale(10),
        borderRadius: 80,
    },
    imagesmall :{
        width: scale(60),
        height: scale(60),
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
        marginBottom: '20@s'
    },
    closeButton: {
        position: 'absolute',
        top: scale(5),
        left: scale(5),
        padding: scale(0)
    }
})