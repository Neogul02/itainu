import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';
import google_icon from '../assets/google_icon.png';
import { Styles } from '../styles';

const webClientId = '1093169796132-0jmlclc4dj8d3cu69gg2nhsdjah2tif7.apps.googleusercontent.com';
const iosClientId = '1093169796132-rd56n5b5nbnn7e4qtqpgkqsu5vinj566.apps.googleusercontent.com';
const androidClientId = '1093169796132-9a253921fhl9vsllsrnish9dubspp6mg.apps.googleusercontent.com';

WebBrowser.maybeCompleteAuthSession();

const LoginWithGoogle = () => {
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId,
    iosClientId,
    androidClientId,
  });

  const getUserProfile = async (token) => {
    if (!token) return;
    try {
      const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userInfo = await res.json();
      console.log('User Info:', userInfo);
    } catch (e) {
      console.error('Failed to get user info:', e);
    }
  };

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      const token = authentication?.accessToken;
      console.log('Access Token:', token);
      getUserProfile(token);

      // 로그인 성공 시 메인 화면으로 이동
      navigation.replace('MainScreen');
    }
  }, [response]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.pretendardFont}>소셜 로그인으로 빠르게 시작해요</Text>
      <TouchableOpacity
        onPress={() => promptAsync()}
        style={{ flexDirection: 'row' }}
      >
        <Image
          style={{ width: 20, height: 20, margin: 18 }}
          source={google_icon}
        />
        <Text style={[Styles.pretendardFont, { margin: 17, fontSize: 18 }]}>구글 아이디로 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginWithGoogle;
