import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { Styles } from '../styles';

import google_icon from '../assets/google_icon.png';

export default function LoginScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.pretendardFont}>소셜 로그인으로 빠르게 시작해요</Text>
      <TouchableOpacity style={{ width: 337, height: 52, borderRadius: 7.5, flexDirection: 'row', margin: 15, backgroundColor: 'rgba(38, 45, 51, 0.03)' }}>
        <Image
          style={{ width: 20, height: 20, margin: 18 }}
          source={google_icon}
        />
        <Text style={[Styles.pretendardFont, { marginTop: 16, marginLeft: 40, fontSize: 18 }]}>구글 아이디로 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}
