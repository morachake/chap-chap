import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import {IMAGES} from '../constants/index'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UserDetailsCard from '../components/UserDetailsCard'
export default function ProfileScreen() {
  return (
      <View style={{ flex: 1, backgroundColor: '#008AAD'}}>
          <View style={{ flex: 1,justifyContent: 'center' }}>
              <Header iconLeft="arrowleft" />
              <View style={{alignItems:'center'}}>                
                  <Text style={styles.username}>Munene Phineas</Text>
                  <Image source={IMAGES.User} alt='User' style={{ width: 75, height: 75 }} />
                  <View style={{flexDirection:'row',alignItems:'center',margin:5,backgroundColor:'#00748D',borderRadius:8}}>
                      <Text style={{color:'#FFFF',marginHorizontal:15,fontSize:14}}>Edit</Text>
                      <EvilIcons name='pencil' size={22} color='#FFFF' />
                  </View>
              </View>
          </View>
          <View style={{ flex: 2, backgroundColor: '#FFFFFF',alignItems:'center' }}>
              <UserDetailsCard iconame="email" headline="Email Adress" title="phineas@gmail.com" />
              <UserDetailsCard iconame="cellphone" headline="Phone" title="0720000000" />
              <UserDetailsCard iconame="id-card" headline="ID Card" title="7858642" />
              <UserDetailsCard iconame="lock-open-outline" headline="Reset password" title="Reset Password" />
              <TouchableOpacity style={styles.btn}>
                  <Text style={{color:'#FD0B0B',fontSize:14}}>Log Out</Text>
              </TouchableOpacity>
          </View>
   </View>
  )
}

const styles = StyleSheet.create({
    username: {
        fontFamily: 'Poppins-Bold',
        fontSize: 32,        
    },
    icons: {
        marginHorizontal:20
    },
    detailscard: {
        alignItems: 'center',
        borderRadius:8,
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
    },
    btn: {
        backgroundColor: '#E8E8E8',
        borderRadius: 8,
        height: 45,
        width:150,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})