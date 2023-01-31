import React from 'react';
import { View, Image, Button, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet,scale } from 'react-native-size-matters';
import { IMAGES } from '../constants/index'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomModal({ modalVisible, setModalVisible, navigation }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.screen}>
                <View style={{ borderBottomWidth:scale(1), width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Image
                        source={IMAGES.User}
                        resizeMode="cover"
                        style={{ width:scale(40), height: scale(40), margin: scale(5) }}

                    />
                    <View style={{alignItems:'center',justifyContent:'center',}}>
                        <Text style={{fontSize:scale(14),fontFamily:'Inter-Medium'}}>Munene</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' ,alignItems: 'center',padding:5}}>
                            <Text style={{fontSize:12,fontFamily:'Inter-Light'}}>Manage Profile</Text>
                            <Icon name='navigate-next' size={18} />
                        </TouchableOpacity>
                    </View>

                </View>

                
                    <View style={{borderBottomWidth:scale(1),width: '100%'}}>
                        <TouchableOpacity style={styles.wrapper}>
                            <MaterialCommunityIcons name="wallet" size={25} />
                            <Text>Past Jobs</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderBottomWidth:scale(1),width: '100%'}}>
                        <TouchableOpacity style={styles.wrapper}>
                            <AntDesign name="wallet" size={25} />
                            <Text>Favourites</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderBottomWidth:scale(1),width: '100%'}}>
                        <TouchableOpacity style={styles.wrapper}>
                            <AntDesign name="setting" size={35} />
                            <Text>Settings</Text>
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
        height: '350@s',
        width: '90%',
        left: '12@s',
        top: '60@s',
        borderRadius: '6@s',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: '1.5@s',
        backgroundColor: 'white'
    },
    buttons: {
        marginLeft: '12@s',
        alignItems:'flex-start'
    },
    wrapper: {
        flexDirection: 'row',
        //justifyContent: 'space-evenly',
        alignItems:'center',
        width: '80%',
        marginHorizontal: '20@s',
        padding:'10@s'
    },
    image: {

    }
});