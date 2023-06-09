import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Animated, Button, Dimensions} from 'react-native';

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: false,
      duration: 900,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, Dimensions.get('window').width - 100],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button title="Toggle" onPress={() => setEnabled(!enabled)} />
    </View>
  );
};

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <SlideLeftAndRight />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: '#000',
  },
});

export default CalendarScreen;
