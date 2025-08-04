import {LogBox, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import {store} from './src/stateManagement/Store';
import {ThemeProvider} from './src/resources/ThemeContext';
import {PaperProvider} from 'react-native-paper';
import {
  onMessageListener,
  requestUserPermission,
} from './src/networkLayer/FCMServices';

const App = () => {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    requestUserPermission();
    onMessageListener();

 
  }, []);
  return (
    <Provider store={store}>
      <PaperProvider>
        <ThemeProvider>
          <RootNavigation />
        </ThemeProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
function messaging() {
  throw new Error('Function not implemented.');
}
