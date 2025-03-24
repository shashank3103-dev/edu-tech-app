import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import SplashScreen from "../screens/splashscreen/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, 
    headerShown: false,
  };
  return (
    <NavigationContainer>
    <RootStack.Navigator
      // initialRouteName="SPLASHSCREEN"
      screenOptions={TransitionScreenOptions}
    >
      <RootStack.Screen
        name="SPLASHSCREEN"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
