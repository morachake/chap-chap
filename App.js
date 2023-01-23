import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import VerifyEmail from './src/screens/VerifyEmail';

export default function App() {
  return (
    <SafeAreaView>
      <VerifyEmail/>
    </SafeAreaView>
  );
}
