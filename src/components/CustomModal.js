import React from 'react';
import { View, Image, Button, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { IMAGES } from '../constants/index'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CustomModal({ modalVisible, setModalVisible }) {
    const navigation = useNavigation();
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalcontainer}>
                <View style={styles.screen}>
                    <View style={{ borderBottomWidth: scale(1), borderColor:'#D9D9D9', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={IMAGES.User}
                            resizeMode="cover"
                            style={{ width: scale(45), height: scale(45), margin: scale(10) }}

                        />
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: scale(14),color:'#000000', fontFamily: 'Inter-Medium' }}>Munene Phineas</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Profile')}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginVertical: scale(3)
                                }}
                            >
                                <Text style={{ fontSize: scale(12),color:'rgba(0, 0, 0, 0.6)', fontFamily: 'Inter-Light' }}>Manage Profile</Text>
                                <Icon name='navigate-next' size={18} />
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={{ borderBottomWidth: scale(1), width: '100%', paddingVertical: 4 ,borderColor:'#D9D9D9',}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('PastJobs')}
                            style={styles.wrapper}
                        >
                            <MaterialCommunityIcons name="wallet" size={25} />
                            <Text style={styles.titles}>Past Jobs</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: scale(1), width: '100%', paddingVertical: 4,borderColor:'#D9D9D9',alignItems:'center', justifyContent:'center' }}>
                        <TouchableOpacity style={styles.wrapper}
                            onPress={() => navigation.navigate('Favourites')}
                        >
                            <AntDesign name="wallet" size={25} />
                            <Text style={styles.titles}>Favourites</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: scale(1), width: '100%', paddingVertical: 4,marginHorizontal :4,borderColor:'#D9D9D9', }}>
                        <TouchableOpacity style={styles.wrapper} >
                            <AntDesign name="setting" size={35} />
                            <Text style={styles.titles}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{ fontSize: 18, fontFamily: 'Inter-Light',color:'rgba(0, 0, 0, 0.6)' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = ScaledSheet.create({
    modalcontainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'rgba(0, 0, 0, 0.7)'
    },
    screen: {
        height: '320@s',
        width: '95%',
        //left: '12@s',
        bottom: '130@s',
        borderRadius: '6@s',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: '0.1@s',
        borderColor:'#D9D9D9',
        backgroundColor: 'white',
    },
    buttons: {
        marginLeft: '12@s',
        alignItems: 'flex-start'
    },
    wrapper: {
        flexDirection: 'row',
        //justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
        marginHorizontal: '20@s',
        marginVertical: scale(3)
    },
    titles: {
        fontFamily:'Inter-Medium',
        fontSize: '14@s',
        marginHorizontal: '10@s',
        color:'#000000',
    }
});