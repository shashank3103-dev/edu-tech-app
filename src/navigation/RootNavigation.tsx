import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import SplashScreen from "../screens/splashscreen/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/authentication/Login";
import HomeScreen from "../screens/home/HomeScreen";
import BottomTab from "./BottomTab";
import ForgotPassword from "../screens/authentication/ForgotPassword";
import SignUp from "../screens/authentication/SignUp";
import OtpScreen from "../screens/authentication/OtpScreen";
import CourseDetails from "../screens/courses/CourseDetails";
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
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen
          name="SPLASHSCREEN"
          component={SplashScreen}
          options={{ headerShown: false, animation: "fade" }}
        />
        <RootStack.Screen
          name="LOGIN"
          component={Login}
          options={{ headerShown: false, animation: "fade" }}
        />
        <RootStack.Screen name="BottomTabStack" component={BottomTab} />
        <RootStack.Screen
          name="FORGOT_PASSWORD"
          component={ForgotPassword}
          options={{ headerShown: false, animation: "fade" }}
        />
        <RootStack.Screen
          name="SIGN_UP"
          component={SignUp}
          options={{ headerShown: false, animation: "fade" }}
        />
        <RootStack.Screen
          name="OTP"
          component={OtpScreen}
          options={{ headerShown: false, animation: "fade" }}
        />
      
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
