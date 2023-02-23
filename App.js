import React, {useEffect} from 'react';
import MainNavStack from './src/navigation/MainNavStack';
import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 2500});
  }, []);
  return <MainNavStack />;
}
