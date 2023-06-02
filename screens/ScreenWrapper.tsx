import React, {PropsWithChildren} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const DismissKeyboard = ({children}: PropsWithChildren) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const ScreenWrapper = ({children}: PropsWithChildren) => {
  return (
    <DismissKeyboard>
      <View style={styles.wrapper}>{children}</View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default ScreenWrapper;
