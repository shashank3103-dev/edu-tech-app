import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
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
import URLManager from "../../networkLayer/URLManager";

import CoursesCard from "../../components/homeComponents/CoursesCard";
import { Course } from "../../stateManagement/modals/HomeScreenModal";

const SERVICES = eduServices;
const HomeScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchCourseDetailApi();
    fetchBannersDetailApi();
  }, []);

  const renderService = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.serviceCard,
        {
          backgroundColor: theme.COLORS.primary,
        },
      ]}
    >
      <Image
        style={[
          {
            width: 20,
            height: 20,
            tintColor: theme.COLORS.white,
          },
        ]}
        resizeMode="contain"
        source={item.image}
      ></Image>

      <Text
        style={[FONTS.body5, { color: theme.COLORS.white }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  const theme = useAppTheme();

  async function fetchCourseDetailApi() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .getAllCourses()
        .then((res) => {
          console.log(res);
          return res.json() as Promise<any>;
        })
        .then(async (res: any) => {
          console.log(res.data, "COURSE DETAILS");
          if (res?.data) {
            setCourses(res.data);
          }
        })
        .catch((e) => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  async function fetchBannersDetailApi() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .getBanners()
        .then((res) => {
          console.log(res);
          return res.json() as Promise<any>;
        })
        .then(async (res: any) => {
          console.log(res, "BANNERS DETAILS");
          if (res) {
            setBanners(res);
          }
        })
        .catch((e) => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.COLORS.background }]}
    >
      <HomeHeader
        title="Home"
        onBackPress={() => navigation.navigate("PROFILE")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
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
        <Text style={[FONTS.h3, { color: theme.COLORS.text, marginStart: 20 }]}>
          Our Courses
        </Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.courseId.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CourseDetail", { courseId: item.courseId })
              }
              style={{
                backgroundColor: theme.COLORS.background,
                borderRadius: 12,
                borderColor: theme.COLORS.card,
                borderWidth: 1,
                padding: 12,
                height: 200,
                width: "47%", // Two cards per row with margin
                margin: "1.5%",
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: 80, borderRadius: 8 }}
                resizeMode="cover"
              />
              <Text
                style={[
                  FONTS.body4,
                  {
                    color: theme.COLORS.text,
                    marginTop: 8,
                    textTransform: "capitalize",
                  },
                ]}
                numberOfLines={1}
              >
                {item.title}
              </Text>
              <Text
                style={[FONTS.body5, { color: theme.COLORS.gray }]}
                numberOfLines={1}
              >
                Tutor: {item.tutor}
              </Text>
              <View
                style={{
                  // width: "50%",
                  borderWidth: 0.7,
                  borderColor: theme.COLORS.primary,
                  borderRadius: 10,
                  // justifyContent:'center',
                  // alignItems:'center',
                }}
              >
                <Text
                  style={[FONTS.body5, { color: theme.COLORS.gray }]}
                  numberOfLines={1}
                >
                  {item.category}
                </Text>
              </View>
              <Text
                style={[
                  FONTS.body5,
                  { color: theme.COLORS.primary, marginTop: 4 },
                ]}
              >
                ₹{parseFloat(item.price).toLocaleString()}
              </Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingBottom: 20,
          }}
        />
      </ScrollView>
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
    flexDirection: "column",
    borderRadius: 20,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
