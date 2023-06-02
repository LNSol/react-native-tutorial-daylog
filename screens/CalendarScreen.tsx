import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useLog} from '../contexts/LogContext';

const CalendarScreen = () => {
  const {text} = useLog();

  return (
    <View style={styles.block}>
      <Text style={styles.text}>Text: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
});

export default CalendarScreen;
