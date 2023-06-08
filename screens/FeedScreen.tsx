import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useLog} from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';
import {useFocusEffect} from '@react-navigation/native';
import FeedListItem from '../components/FeedListItem';

const FeedScreen = () => {
  const {logs} = useLog();

  useFocusEffect(
    useCallback(() => {
      console.log(JSON.stringify(logs, null, 2));
    }, [logs]),
  );
  console.log(logs[0]);

  return (
    <View style={styles.block}>
      {logs?.map(log => (
        <FeedListItem key={log.id} log={log} />
      ))}
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
