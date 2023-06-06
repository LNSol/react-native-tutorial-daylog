import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenWrapper from './ScreenWrapper';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';

const WriteScreen = () => {
  return (
    <ScreenWrapper>
      <SafeAreaView style={styles.block}>
        <WriteHeader />
        <WriteEditor />
      </SafeAreaView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default WriteScreen;
