import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainImage from '../assets/main_icon.png';
import { Styles } from '../styles';

export default function FirstScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginWithGoogle'); // 3초 후 구글 로그인 화면으로 이동
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 클리어
  }, [navigation]);
 

  return (
    <View style={Styles.container}>
      <Image
        style={{ width: 200, height: 200, borderRadius: 85 }}
        source={MainImage}
      />
      <Text style={[Styles.pretendardFont, { fontSize: 18, fontWeight: '600' }]}>반려동물의 건강을 관리해요</Text>
      <View style={{ height: 30 }} />
      <Text style={[Styles.pretendardFont, { fontSize: 25, fontWeight: '600' }]}>いたいぬ</Text>
    </View>
  );
}
