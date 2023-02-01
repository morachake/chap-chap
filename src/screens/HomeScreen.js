import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, IMAGES } from '../constants';
import SearchInput from '../components/SearchInput';
import Services from '../components/Services';
import ServiceCard from '../components/ServiceCard';
import CustomModal from '../components/CustomModal';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default function HomeScreen({ navigation }) {
    const [modalVisible,setModalVisible] =useState(false)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#EAFFFF' }}>
                <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <View style={styles.header}>
                    <Text style={{ justifyContent: 'center' }}>
                        <Text style={styles.firstThree}>Chap</Text>
                        <Text style={styles.rest}>Chap</Text>
                    </Text>
                    <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                    <Image
                        source={IMAGES.User}
                        resizeMode="cover"
                        style={{ width:scale(40), height: scale(40) }}
                        
                    />
                    </TouchableOpacity>
                    
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.user}>Hi James,</Text>
                    <Text style={styles.service}>What Services do you need today?</Text>
                    <SearchInput />
                </View>
            </View>
            <View style={{ flex: 1.6, backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.title}>Categories</Text>
                    <Services/>
                </View>
                    <Text style={styles.title}>Home Services</Text>
             
                    <ServiceCard />
                    
              
                <Text style={styles.title}>Other Services</Text>
                <ServiceCard/>
            </View>
        </View>
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
    },
    firstThree: {
        color: '#00748D',
        fontFamily: 'Poppins-BoldItalic',
        fontSize: '18@s',
    },
    rest: {
        color: '#041747',
        fontFamily: 'Poppins-BoldItalic',
        fontSize: '18@s',
    },
    user: {
        paddingTop: '10@s',
        fontFamily: 'Poppins-Light',
        fontSize: '12@s',
        color: '##000000',
    },
    service: {
        paddingTop: '10@s',
        fontSize: '24@s',
        fontFamily: 'Poppins-LightItalic',
    },
    title: {
        fontFamily: 'Poppins-Light',
        fontSize: '16@s',
        color: '#000000',
        margin:'10@s'
    }
});
