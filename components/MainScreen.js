import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../styles'; // 스타일을 불러옴
import petImagePlaceholder from '../assets/main_icon.png'; // 반려동물 사진 플레이스홀더

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.pretendardFont}>메인 화면입니다.</Text>

      {/* 반려동물 사진 부분을 클릭 가능하게 설정 */}
      <TouchableOpacity onPress={() => navigation.navigate('PetRegistrationScreen')}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 10 }}
          source={petImagePlaceholder} // 반려동물 이미지
        />
        <Text style={Styles.pretendardFont}>반려동물 사진</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
