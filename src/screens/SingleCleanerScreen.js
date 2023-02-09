import React, { useState } from 'react'
import { View, Text, Image, Modal, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import Header from '../components/Header'
import { ScaledSheet, scale } from 'react-native-size-matters'
import Rating from '../components/Rating'
import Btn from '../components/Btn'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export default function SingleCleanerScreen({ route }) {
    const navigation = useNavigation();
    const { item } = route.params
    const [isModalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const handlePress = () => {
        setLoading(true);
        setTimeout(() => {
            setModalVisible(false);
            setLoading(false);
            navigation.navigate('PastJobs');
        }, 2000)
    }
    return (
        <View>
            <Header iconLeft="arrowleft" />
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ fontSize: scale(32), fontFamily: 'Inter-Bold',color:'#000000' }}>Confirm selection</Text>
                <Text style={{ fontSize: scale(14), fontFamily: 'Inter-Light',color:'rgba(0, 0, 0, 0.7)'  }}>You have selected {item.name} .Please confirm to complete</Text>
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
                <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: 'white', height: scale(250), width: scale(300), padding: scale(4), borderRadius: scale(8), }}>

                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <AntDesign size={28} name='close' color='#00748D' />
                                </TouchableOpacity>



                                <View style={{ flexDirection: 'column', padding: scale(4), justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Image source={item.image} resizeMode="cover" style={styles.imagesmall} />
                                    <Text style={{ fontSize: scale(12), padding: scale(3) }}>You selected {item.name} </Text>
                                    <Text style={{ fontSize: scale(14), padding: scale(3) }}>To clean 10 Rooms</Text>
                                    <Text style={{ fontSize: scale(14), padding: scale(3) }}>At Kilimani 400020</Text>
                                    <Text style={{ fontSize: scale(14), padding: scale(3) }}>Are you sure you want ot continue</Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: scale(8) }}>
                                    <Btn title={loading ? <ActivityIndicator size='large' color='#FFFF' /> : 'Confirm'} onPress={handlePress} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    imagesmall: {
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
        fontFamily: 'Inter-SemiBold',
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