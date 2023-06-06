import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenWrapper from './ScreenWrapper';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';

const WriteScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.select({ios: 'padding'})}>
        <SafeAreaView style={styles.block}>
          <WriteHeader />
          <WriteEditor
            title={title}
            body={body}
            changeTitle={setTitle}
            changeBody={setBody}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'red',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
