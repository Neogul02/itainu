import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './components/FirstScreen';
import LoginWithGoogle from './components/LoginWithGoogle';
import MainScreen from './components/MainScreen'; // 메인 화면 컴포넌트
import PetRegistrationScreen from './components/PetRegistrationScreen'; // 반려동물 등록 화면 컴포넌트

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }} // 헤더를 숨깁니다.
        />
        <Stack.Screen
          name="LoginWithGoogle"
          component={LoginWithGoogle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PetRegistrationScreen"
          component={PetRegistrationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
