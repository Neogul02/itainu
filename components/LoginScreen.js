import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Styles } from '../styles';

export default function LoginScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.pretendardFont}>소셜 로그인으로 빠르게 시작해요</Text>
      <View style={{ width: 337, height: 52, borderRadius: 7.5, flexDirection: 'row', margin: 15, backgroundColor: 'rgba(38, 45, 51, 0.03)' }}>
        <Image
          style={{ width: 20, height: 20, margin: 18 }}
          source={'../assets/google_icon.png'}
        />
        <Text style={[Styles.pretendardFont, { marginTop: 16, marginLeft: 40, fontSize: 18 }]}>구글 아이디로 시작하기</Text>
      </View>
    </View>
  );
}
