import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Animated, Button} from 'react-native';

const FadeInAndOut = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const [hide, setHide] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hide ? 0 : 1,
      useNativeDriver: false,
    }).start();
  }, [animation, hide]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            opacity: animation,
          },
        ]}
      />
      <Button title="toggle" onPress={() => setHide(!hide)} />
    </View>
  );
};

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <FadeInAndOut />
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
