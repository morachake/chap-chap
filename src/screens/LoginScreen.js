import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import Btn from '../components/Btn';
import { COLORS } from '../constants';
import { ScaledSheet, scale } from 'react-native-size-matters';
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = () => {
        if (!email) {
            setErrorMessage('Email cannot be blank');
        } else if (!password) {
            setErrorMessage('Password cannot be blank');
        } else {
            setErrorMessage('');
            navigation.navigate('Home');
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={{ display: 'flex', backgroundColor: '#F5F5F5', flex: 1 }}>
                <Header iconLeft="arrowleft" />
                <Text style={styles.heading}>Login</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <MainInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        label="Email" />
                    <MainInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        label="Password"
                    />
                    {errorMessage ? (
                        <Text style={styles.errormessage}>{errorMessage}</Text>
                    ) : null}
                </View>
                <View style={{ flexDirection: 'row', margin: scale(20) }}>
                    <Text style={styles.text}>Dont  have an account ?</Text>
                    <Text style={styles.text2} onPress={() => navigation.navigate('Register')}>Register</Text>
                </View>
                <View style={styles.btncontainer}>
                    <Btn
                        onPress={handleLogin}
                        title="Login" />

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
        marginTop: '40%',
        bottom: 0,
    },
    text: {
        fontSize: '14@s',
        color: '#000',
        paddingHorizontal: '5@s',
    },
    text2: {
        fontSize: '14@s',
        color: COLORS.primary,
    },
    errormessage: {
        color: 'red',
        marginTop: '10@s',
        fontFamily: 'Inter-Italic'
    },
});
