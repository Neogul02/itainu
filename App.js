import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import { Styles } from './styles';

import FirstScreen from './components/FirstScreen';
import LoginScreen from './components/LoginScreen';

export default function App() {
  const [isFont, setIsFont] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      pretendard: require('./assets/fonts/Pretendard-Medium.ttf'),
    });
    setIsFont(true);
  }, []);

  const [showFirstPage, setShowFirstPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstPage(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (showFirstPage) {
    return <FirstScreen />;
  }

  return (
    <View style={Styles.container}>
      <LoginScreen />
      {/* <Text style={Styles.pretendardFont}>메인화면 입니다</Text> */}
    </View>
  );
}
