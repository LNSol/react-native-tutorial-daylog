import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogProvider} from './contexts/LogContext';
import {SearchProvider} from './contexts/SearchContext';
import RootStack from './screens/RootStack';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <SearchProvider>
        <LogProvider>
          <KeyboardAvoidingView
            style={styles.avoidingView}
            behavior={Platform.select({ios: 'padding'})}>
            <RootStack />
          </KeyboardAvoidingView>
        </LogProvider>
      </SearchProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  avoidingView: {
    flex: 1,
  },
});
export default App;
