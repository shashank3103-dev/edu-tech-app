import { LogBox, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/RootNavigation";
import { store } from "./src/stateManagement/Store";

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
