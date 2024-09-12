import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Styles } from '../styles'; // 기존 스타일

const PetRegistrationScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 이미지 선택 함수
  const pickImage = async () => {
    // 카메라 롤에 접근 권한 요청
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('이미지 선택을 위해서는 카메라 롤 접근 권한이 필요합니다.');
      return;
    }

    // 이미지 선택
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setSelectedImage(pickerResult.assets[0].uri); // 선택된 이미지의 URI 저장
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.pretendardFont}>반려동물 등록 화면입니다.</Text>

      {/* 선택된 이미지가 있으면 화면에 표시 */}
      {selectedImage ? (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, borderRadius: 10 }}
        />
      ) : (
        <Text style={Styles.pretendardFont}>반려동물 사진을 선택하세요</Text>
      )}

      <TouchableOpacity onPress={pickImage} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, color: 'blue' }}>사진 선택</Text>
      </TouchableOpacity>

      {/* 나중에 추가할 다른 입력 요소들 예시 */}
      <View style={{ marginTop: 20 }}>
        <Text>추가 입력란 (반려동물 이름, 나이 등)</Text>
        <TextInput></TextInput>
      </View>
    </View>
  );
};

export default PetRegistrationScreen;
