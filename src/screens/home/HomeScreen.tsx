import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppTheme } from "../../resources/ThemeContext";
import HomeHeader from "../../components/header/HomeHeader";
import AdCarousal from "../../components/AdCarousal";
import { adData, eduServices } from "../../resources/DummyData";
import { FONTS } from "../../resources/Theme";

const SERVICES = eduServices;
const HomeScreen = ({ navigation }: any) => {
  const renderService = ({ item }: any) => (
    <TouchableOpacity style={[styles.serviceCard,{
      backgroundColor:theme.COLORS.primary,
    }]}>
      <Image
        style={[
          {
            width: 20,
            height: 20,
            tintColor:theme.COLORS.white,
          },
        ]}
        resizeMode="contain"
        source={item.image}
      ></Image>
      {/* <Text style={{ color: theme.COLORS.text }}>{item.name}</Text> */}
      <Text style={[FONTS.body5, { color: theme.COLORS.white,}]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
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
      <Text style={[FONTS.h3, { color: theme.COLORS.text, marginStart: 20 }]}>
        Our Services
      </Text>
      <View style={[styles.card, { backgroundColor: theme.COLORS.card }]}>
        <FlatList
          data={SERVICES}
          renderItem={renderService}
          // keyExtractor={({ item }: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.serviceList}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  serviceList: {
    flexDirection: "row",
    gap: 10,
  },
  container: {
    flex: 1,
  },
  card: {
    padding: 7,
    height: 70,
    borderRadius: 12,
    margin: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceCard: {
    flexDirection:'column',

    // padding: 5,
    borderRadius: 20,
    // marginRight: 10,
    width:80,
    // height:0,
    alignItems: 'center',
    justifyContent: "center",
  },
});
