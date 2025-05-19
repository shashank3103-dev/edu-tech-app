import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';

const RootStack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      
    </RootStack.Navigator>
  );
};


export default HomeNavigation

const styles = StyleSheet.create({})