import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAppTheme } from "../../resources/ThemeContext";
import { FONTS } from "../../resources/Theme";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const theme = useAppTheme();
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LOGIN" as never);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigation]);
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        },
        { backgroundColor: theme.COLORS.background },
      ]}
    >
      <Text style={[FONTS.body4, { color: theme.COLORS.text }]}>
        Splash Screen
      </Text>
      <Image
        source={require("../../assets/login.png")}
        style={{
          width: 100,
          height: 100,
        }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
