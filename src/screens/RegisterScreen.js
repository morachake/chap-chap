import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import Btn from '../components/Btn';
import { COLORS } from '../constants/index'
import { ScaledSheet } from 'react-native-size-matters';
export default function RegisterScreen({ navigation }) {
    return (
        <View style={{ display: 'flex', backgroundColor: '#F5F5F5' }}>
            <Header iconLeft="arrowleft" onPress={() => navigation.goBack} />
            <Text style={styles.heading}>Register</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <MainInput
                    errorMessage="invalid name"
                    label="Your Name"
                />
                <MainInput label="Your Email Adress" />
            </View>
            <View style={styles.btncontainer}>
                <Btn
                    onPress={()=>navigation.navigate("Home")}
                    title="Register" />
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={styles.text}>Already have an account</Text>
                    <Text style={styles.text2} onPress={() => navigation.navigate('Login')}>Login</Text>
                </View>
            </View>
        </View>
    );
}
const styles = ScaledSheet.create({
    heading: {
        fontFamily: 'Poppins-Bold',
        fontSize: '32@s',
        color: '#000000',
        margin: '20@s',
    },
    btncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '55%',
        bottom: 0,
    },
    text: {
        fontSize: '14@s',
        color: '#000',
        paddingHorizontal: 5,
    },
    text2: {
        fontSize: '14@s',
        color: COLORS.primary,
    },
});
