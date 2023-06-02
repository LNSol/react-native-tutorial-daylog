import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogProvider} from './contexts/LogContext';
import RootStack from './screens/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <LogProvider>
        <RootStack />
      </LogProvider>
    </NavigationContainer>
  );
};
export default App;
