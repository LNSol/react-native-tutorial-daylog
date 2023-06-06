import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useLog} from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';
import {useFocusEffect} from '@react-navigation/native';

const FeedScreen = () => {
  const {logs} = useLog();

  useFocusEffect(
    useCallback(() => {
      console.log(JSON.stringify(logs, null, 2));
    }, [logs]),
  );

  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedScreen;
