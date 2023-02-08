import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableOpacity, Touchable, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import Btn from '../components/Btn';
import { COLORS } from '../constants/index'
import { ScaledSheet } from 'react-native-size-matters';
export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (!email) {
            setErrorMessage('Email   cannot be empty');
        } else if (!name) {
            setErrorMessage('Name  cannot be empty');
        } else {
            setErrorMessage('');
            navigation.navigate('Home');
        }
    };
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
          
                <Header iconLeft="arrowleft" onPress={() => navigation.goBack} />
                <Text style={styles.heading}>Register</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <MainInput
                        label="Your Name"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <MainInput
                        label="Your Email Adress"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    {errorMessage ? (
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    ) : null}
                </View>
                <View style={styles.btncontainer}>
                    <Btn
                        onPress={handleLogin}
                        title="Register" />
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={styles.text}>Already have an account</Text>
                        <Text style={styles.text2} onPress={() => navigation.navigate('Login')}>Login</Text>
                    </View>
                </View>
               
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
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
    errorMessage: {
        color: 'red',
        marginTop: 10,
        fontFamily: 'Inter-Italic'
    },
});
