import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenWrapper from './ScreenWrapper';
import {useLog} from '../contexts/LogContext';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackScreenParamList} from './RootStack';

type WriteScreenProps = NativeStackScreenProps<
  RootStackScreenParamList,
  'Write'
>;

const WriteScreen = ({navigation}: WriteScreenProps) => {
  const {addLog} = useLog();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const save = () => {
    addLog({title, body, date: new Date().toString()});
    navigation.pop();
  };

  const goBack = () => {
    if (title === '' && body === '') {
      navigation.pop();
    } else {
      Alert.alert('', '내용을 저장하고 화면에서 나가시겠습니까?', [
        {
          text: '저장하지 않고 나가기',
          onPress: () => {
            navigation.pop();
          },
          style: 'destructive',
        },
        {
          text: '저장 후 나가기',
          onPress: () => {
            save();
          },
          style: 'default',
        },
      ]);
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.select({ios: 'padding'})}>
        <SafeAreaView style={styles.block}>
          <WriteHeader save={save} goBack={goBack} />
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
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
