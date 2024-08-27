import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  // 공통 컨테이너
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // pretendard 폰트
  pretendardFont: {
    color: 'black',
    fontFamily: 'pretendard',
    fontSize: 20,
  },
  // 다른 컴포넌트에서 사용할 수 있는 추가 스타일들
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'pretendard',
    fontSize: 18,
    color: '#fff',
  },
});
