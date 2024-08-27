import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainImage from '../assets/main_icon.png';
import { Styles } from '../styles';

export default function FirstScreen() {
  return (
    <View style={Styles.container}>
      <Image
        style={{ width: 200, height: 200, borderRadius: 85 }}
        source={MainImage}
      />
      <Text style={[Styles.pretendardFont, { fontSize: 18, fontWeight: 600 }]}>반려동물의 건강을 관리해요</Text>
      <View style={{ height: 30 }} />
      <Text style={[Styles.pretendardFont, { fontSize: 25, fontWeight: 600 }]}>いたいぬ</Text>
    </View>
  );
}
