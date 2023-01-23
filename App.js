import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ResetPassword from './src/screens/ResetPassScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaView>
      <LoginScreen />
    </SafeAreaView>
  );
}
