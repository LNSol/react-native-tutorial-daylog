import React from 'react';
import {StyleSheet, View, Pressable, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ICircleButtonProps {
  name: string;
  color: string;
  hasMarginRight?: boolean;
  onPress?: () => void;
}

const TransparentCircleButton = ({
  name,
  color,
  hasMarginRight = false,
  onPress = () => {},
}: ICircleButtonProps) => {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.marginRight]}>
      <Pressable
        style={({pressed}) => [
          styles.iconButton,
          Platform.select({ios: {opacity: pressed ? 0.6 : 1}}),
        ]}
        android_ripple={{color: '#ededed'}}
        onPress={onPress}>
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});

export default TransparentCircleButton;
