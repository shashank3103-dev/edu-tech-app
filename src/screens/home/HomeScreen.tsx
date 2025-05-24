import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "../../resources/ThemeContext";
import HomeHeader from "../../components/header/HomeHeader";
import AdCarousal from "../../components/AdCarousal";
import { adData } from "../../resources/DummyData";
const HomeScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.COLORS.background }]}
    >
      <HomeHeader
        title="Home"
        onBackPress={() => navigation.navigate("PROFILE")}
      />
      <AdCarousal adData={adData} />
      {/* <View
        style={[styles.card, { backgroundColor: theme.COLORS.card }]}
      ></View> */}
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 10,
    height: 10,
    borderRadius: 12,
    margin: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
