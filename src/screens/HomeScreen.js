import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, IMAGES } from '../constants';
import SearchInput from '../components/SearchInput';
import Services from '../components/Services';
import ServiceCard from '../components/ServiceCard';
import CustomModal from '../components/CustomModal';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1,backgroundColor: '#FFFF' }}>
            <View style={styles.topcontainer}>
                <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <View style={styles.header}>
                    <Text style={{ justifyContent: 'center' }}>
                        <Text style={styles.firstThree}>Chap</Text>
                        <Text style={styles.rest}>Chap</Text>
                    </Text>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Image
                            source={IMAGES.User}
                            resizeMode="cover"
                            style={{ width: scale(40), height: scale(40) }}

                        />
                    </TouchableOpacity>

                </View>
                <View style={{ paddingHorizontal: 10 ,marginBottom:10}}>
                    <Text style={styles.user}>Hi James,</Text>
                    <Text style={styles.service}>
                        What 
                        <Text style={{ fontFamily: 'Inter-Bold',color: 'rgba(4, 23, 71, 0.8)' }}>
                            Services
                        </Text> do you need today?</Text>
                    <SearchInput />
                </View>
            </View>
            <View style={{backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.title}>Categories</Text>
                    <Services />
                </View>
                <Text style={styles.title}>Home Services</Text>
                <ServiceCard />
                <Text style={styles.title}>Other Services</Text>
                <ServiceCard />
            </View>
        </ScrollView>
    );
}

const styles = ScaledSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10@s',
        padding: '10@s',
    },
    topcontainer: {
        backgroundColor: COLORS.lightPrimary,
        height: '45%'
    },
    firstThree: {
        color: '#00748D',
        fontFamily: 'Inter-Bold',
        fontSize: '18@s',
    },
    rest: {
        color: '#041747',
        fontFamily: 'Inter-Bold',
        fontSize: '18@s',
    },
    user: {
        paddingTop: '10@s',
        fontFamily: 'Inter-Bold',
        fontSize: '12@s',
        color: '##000000',
    },
    service: {
        paddingTop: '10@s',
        fontSize: '24@s',
        fontFamily: 'Inter-Medium',
    },
    title: {
        fontFamily: 'Inter-Medium',
        fontSize: '16@s',
        color: '#000000',
        margin: '10@s',
        
    }
});
