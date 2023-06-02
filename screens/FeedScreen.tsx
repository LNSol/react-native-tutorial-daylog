import React from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';

// type ComposedRootMainNavigation = CompositeNavigationProp<
//   BottomTabNavigationProp<MainTabScreenParamList, 'Feed'>,
//   NativeStackNavigationProp<RootStackScreenParamList>
// >;

const FeedScreen = () => {
  // const navigation = useNavigation<ComposedRootMainNavigation>();

  // const goToWriteScreen = () => {
  //   navigation.navigate('Write');
  // };

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
