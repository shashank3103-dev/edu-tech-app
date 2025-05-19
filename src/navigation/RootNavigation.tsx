import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import SplashScreen from "../screens/splashscreen/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/authentication/Login";
import HomeScreen from "../screens/home/HomeScreen";
import BottomTab from "./BottomTab";
const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, 
    headerShown: false,
  };
  return (
    <NavigationContainer>
    <RootStack.Navigator
      initialRouteName="SPLASHSCREEN"
      screenOptions={{headerShown: false}}
    >
      <RootStack.Screen
        name="SPLASHSCREEN"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="LOGIN"
        component={Login}
        options={{ headerShown: false }}
      />
       <RootStack.Screen name="BottomTabStack" component={BottomTab} />
       {/* <RootStack.Screen
        name="HOMESCREEN"
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}
    </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
