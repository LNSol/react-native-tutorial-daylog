import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useLog} from '../contexts/LogContext';
import ScreenWrapper from './ScreenWrapper';

const FeedScreen = () => {
  const {text, setText} = useLog();
  return (
    <ScreenWrapper>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="텍스트를 입력하세요."
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  block: {},
  input: {
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default FeedScreen;
