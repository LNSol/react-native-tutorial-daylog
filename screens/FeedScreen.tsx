import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useLog} from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';
import {useFocusEffect} from '@react-navigation/native';
import FeedList from '../components/FeedList';

const FeedScreen = () => {
  const {logs} = useLog();
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = (isBottom: boolean) => {
    if (hidden !== isBottom) setHidden(isBottom);
  };

  useFocusEffect(
    useCallback(() => {
      console.log(JSON.stringify(logs, null, 2));
    }, [logs]),
  );
  console.log(logs[0]);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedScreen;
