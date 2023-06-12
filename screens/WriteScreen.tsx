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

const WriteScreen = ({route, navigation}: WriteScreenProps) => {
  const {log} = route.params;
  const {addLog, modifyLog, removeLog} = useLog();
  const [title, setTitle] = useState(log.title);
  const [body, setBody] = useState(log.body);

  const save = () => {
    'id' in log
      ? modifyLog({id: log.id, date: log.date, title, body})
      : addLog({title, body, date: new Date().toString()});

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

  const askRemove = () => {
    if ('id' in log) {
      Alert.alert('피드 삭제', '피드를 정말로 삭제하시겠습니까?', [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            removeLog(log.id);
            navigation.pop();
          },
          style: 'destructive',
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
          <WriteHeader
            isEditing={'id' in log}
            save={save}
            goBack={goBack}
            remove={askRemove}
          />
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
