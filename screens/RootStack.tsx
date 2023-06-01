import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

type RootStackScreenParamList = {
  Main: undefined;
  Write: undefined;
};

const Stack = createNativeStackNavigator<RootStackScreenParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Write" component={WriteScreen} />
    </Stack.Navigator>
  );
};
export default RootStack;