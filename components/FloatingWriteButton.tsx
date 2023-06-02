import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackScreenParamList} from '../screens/RootStack';

const FloatingWriteButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackScreenParamList>>();

  const goToWriteScreen = () => {
    navigation.navigate('Write');
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          // Platform.OS === 'ios' && {
          //   opacity: pressed ? 0.6 : 1,
          // },
          Platform.select({ios: {opacity: pressed ? 0.6 : 1}}),
        ]}
        android_ripple={{color: 'rgba(255, 255, 255, 0.6)'}}
        onPress={goToWriteScreen}>
        <Icon name="add" size={32} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    bottom: 16,
    right: 16,
    // ios 전용 그림자 효과
    shadowColor: '#4d4d4d',
    shadowOpacity: 0.3,
    shadowOffset: {width: 1, height: 3},
    shadowRadius: 4,
    // android 전용 그림자 효과
    elevation: 5,
    // 안드로이드에서 물결 효과가 영역 밖으로 나가지 않도록 설정
    // ios에서는 overflow가 hidden일 경우 그림자가 보여지지 않음.
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    backgroundColor: '#46c4ea',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
});
export default FloatingWriteButton;
