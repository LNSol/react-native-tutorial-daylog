import React from 'react';
import TransparentCircleButton from './TransparentCircleButton';
import {StyleSheet, View} from 'react-native';

interface IWriteHeaderProps {
  save: () => void;
  goBack: () => void;
}

const WriteHeader = ({save, goBack}: IWriteHeaderProps) => {
  return (
    <View style={styles.block}>
      <TransparentCircleButton
        name="arrow-back"
        color="#424242"
        onPress={goBack}
      />
      <View style={styles.buttons}>
        <TransparentCircleButton
          name="delete-forever"
          color="#ef5350"
          hasMarginRight
        />
        <TransparentCircleButton name="check" color="#009688" onPress={save} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WriteHeader;
