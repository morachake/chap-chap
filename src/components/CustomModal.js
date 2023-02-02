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
            <View style={{backdropFilter: 'blur(10dp)', ...styles.screen }}>
                <View style={{ borderBottomWidth: scale(1),width: '100%', flexDirection: 'row', alignItems: 'center'  }}>
                    <Image
                        source={IMAGES.User}
                        resizeMode="cover"
                        style={{ width: scale(45), height: scale(45), margin: scale(10) }}

                    />
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: scale(14), fontFamily: 'Inter-Light' }}>Munene</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginVertical: scale(3)
                            }}
                        >
                            <Text style={{ fontSize: scale(12), fontFamily: 'Inter-Light' }}>Manage Profile</Text>
                            <Icon name='navigate-next' size={18} />
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={{ borderBottomWidth: scale(1), width: '100%',paddingVertical:4  }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PastJobs')}
                        style={styles.wrapper}
                    >
                        <MaterialCommunityIcons name="wallet" size={25} />
                        <Text style={styles.titles}>Past Jobs</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomWidth: scale(1), width: '100%',paddingVertical:4  }}>
                    <TouchableOpacity style={styles.wrapper}
                        onPress={() => navigation.navigate('Favourites')}
                    >
                        <AntDesign name="wallet" size={25} />
                        <Text style={styles.titles}>Favourites</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomWidth: scale(1), width: '100%',paddingVertical:4 }}>
                    <TouchableOpacity style={styles.wrapper} >
                        <AntDesign name="setting" size={35} />
                        <Text style={styles.titles}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={{ fontSize: 18, fontFamily: 'Inter-Medium' }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = ScaledSheet.create({
    screen: {
        height: '320@s',
        width: '90%',
        left: '12@s',
        top: '60@s',
        borderRadius: '6@s',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: '0.5@s',
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
        fontSize: '14@s',
        marginHorizontal: '10@s'
    }
});