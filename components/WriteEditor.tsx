import React, {Dispatch, SetStateAction, useRef} from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';

interface IWriteEditorProps {
  title?: string;
  body?: string;
  changeTitle?: Dispatch<SetStateAction<string>>;
  changeBody?: Dispatch<SetStateAction<string>>;
}

const WriteEditor = ({
  title = '',
  body = '',
  changeTitle = () => {},
  changeBody = () => {},
}: IWriteEditorProps) => {
  const bodyRef = useRef<TextInput | null>(null);

  const focusOnBodyInput = () => {
    bodyRef.current?.focus();
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.title}
        placeholder="제목을 입력하세요."
        value={title}
        onChangeText={changeTitle}
        onSubmitEditing={focusOnBodyInput}
        returnKeyType="next"
      />
      <TextInput
        style={styles.body}
        placeholder="당신의 오늘을 기록해보세요."
        value={body}
        onChangeText={changeBody}
        multiline
        textAlignVertical="top"
        ref={bodyRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  title: {
    height: 48,
    paddingVertical: 0,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
  },
  body: {
    color: '#263238',
    fontSize: 16,
    marginBottom: Platform.select({android: 30}),
  },
});

export default WriteEditor;
