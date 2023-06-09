import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  Easing,
  Dimensions,
} from 'react-native';

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [{translateX: animation}],
          },
        ]}
      />
      <Button
        title="Left"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 0,
            useNativeDriver: false,
            delay: 0,
            duration: 500,
            isInteraction: true,
          }).start();
        }}
      />
      <Button
        title="Right"
        onPress={() => {
          Animated.timing(animation, {
            toValue: Dimensions.get('window').width - 100,
            useNativeDriver: false,
            delay: 10,
            duration: 1000,
            isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지
            easing: Easing.inOut(Easing.ease),
          }).start();
        }}
      />
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
