import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useAppTheme } from "../../resources/ThemeContext";
import CommonHeader from "../../components/header/CommonHeader";
import { FONTS, ICONS } from "../../resources";

const { width } = Dimensions.get("window");

const CourseDetails = ({ route, navigation }: any) => {
  const theme = useAppTheme();
  const { course } = route.params;

  console.log("Received course:", course);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.COLORS.background }]}
    >
      <CommonHeader title="Course detail" />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Image source={{uri:course.image}} style={styles.banner} resizeMode="cover" />

        <View style={[styles.priceBar, { backgroundColor: theme.COLORS.card }]}>
          <Text
            style={[
              FONTS.h2,
              {
                color: theme.COLORS.gray,
                textTransform: "capitalize",
              },

              { color: theme.COLORS.text },
            ]}
          >
            ₹ {parseFloat(course.price).toFixed(2).replace(/\.00$/, "")}
          </Text>
        </View>

        <View style={styles.content}>
          <Text
            style={[
              FONTS.body3,
              {
                color: theme.COLORS.text,
                marginTop: 8,
                textTransform: "capitalize",
              },
            ]}
          >
            {course.category} course
          </Text>

          <Text
            style={[
              FONTS.h2,
              {
                color: theme.COLORS.text,
                marginTop: 8,
                textTransform: "capitalize",
              },
            ]}
          >
            {course.title}
          </Text>

          <Text
            style={[
              FONTS.body4,
              {
                color: theme.COLORS.text,
                marginTop: 8,
                textTransform: "capitalize",
              },
            ]}
          >
            {course.description}
          </Text>

          <View style={styles.badge}>
            <Text
              style={[
                FONTS.body6,
                {
                  color: theme.COLORS.black,
                  // marginTop: 8,
                  textTransform: "capitalize",
                },
              ]}
            >
              {course.category}
            </Text>
          </View>
          <Text
            style={[
              FONTS.h4,
              {
                color: theme.COLORS.gray,
                textTransform: "capitalize",
              },

              { color: theme.COLORS.text },
            ]}
          >
            This course includes:
          </Text>

          <View style={styles.features}>
            <View style={styles.featureItem}>
              <Image
                source={ICONS.TIMER}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.COLORS.gray,
                  marginRight: 6,
                }}
                resizeMode="contain"
              />
              <Text
                style={[
                  FONTS.body4,
                  {
                    color: theme.COLORS.gray,
                    textTransform: "capitalize",
                  },
                ]}
              >
                {course.learning_minutes} min
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={ICONS.SECTION}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.COLORS.gray,
                  marginRight: 6, // Adjusted for better spacing
                }}
                resizeMode="contain"
              />
              <Text
                style={[
                  FONTS.body4,
                  {
                    color: theme.COLORS.gray,
                    textTransform: "capitalize",
                  },
                ]}
              >
                3 sections
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={ICONS.LECTURES}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.COLORS.gray,
                  marginRight: 6, // Adjusted for better spacing
                }}
                resizeMode="contain"
              />
              <Text
                style={[
                  FONTS.body4,
                  {
                    color: theme.COLORS.gray,
                    textTransform: "capitalize",
                  },
                ]}
              >
                {course.lectures} lectures
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={ICONS.MARK}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.COLORS.gray,
                  marginRight: 6, // Adjusted for better spacing
                }}
                resizeMode="contain"
              />
              <Text
                style={[
                  FONTS.body4,
                  {
                    color: theme.COLORS.gray,
                    textTransform: "capitalize",
                  },
                ]}
              >
                Mark of completion
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={ICONS.GLOBE}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.COLORS.gray,
                  marginRight: 6, // Adjusted for better spacing
                }}
                resizeMode="contain"
              />
              <Text
                style={[
                  FONTS.body4,
                  {
                    color: theme.COLORS.gray,
                    textTransform: "capitalize",
                  },
                ]}
              >
                Anywhere access
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={ICONS.ACCESS}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.COLORS.gray,
                  marginRight: 6, // Adjusted for better spacing
                }}
                resizeMode="contain"
              />
              <Text
                style={[
                  FONTS.body4,
                  {
                    color: theme.COLORS.gray,
                    textTransform: "capitalize",
                  },
                ]}
              >
                Lifetime access
              </Text>
            </View>
          </View>

          {/* Requirements */}
          <Text
            style={[
              FONTS.h3,
              {
                color: theme.COLORS.gray,
                textTransform: "capitalize",
              },

              { color: theme.COLORS.text },
            ]}
          >
            This course require:
          </Text>
          <Text style={[styles.desc, { color: theme.COLORS.gray }]}>
            Learn with ChatGPT and DALL-E! No prerequisites, just curiosity and
            enthusiasm for cutting-edge tech.
          </Text>
          <Text style={[styles.desc, { color: theme.COLORS.gray }]}>
            All you need is an internet connection, and congratulations - you
            already have it! Time to unleash your inner artist with ChatGPT and
            DALL-E.
          </Text>

          {/* Target */}
          <Text style={[styles.sectionTitle, { color: theme.COLORS.text }]}>
            This course target:
          </Text>
          <Text style={[styles.desc, { color: theme.COLORS.gray }]}>
            • {course.target}
          </Text>
        </View>
      </ScrollView>

      {/* Footer Buttons */}
      <View style={[styles.footer, { backgroundColor: theme.COLORS.card }]}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: theme.COLORS.primary }]}
          
        >
          <Text style={[FONTS.h4, { color: theme.COLORS.text }]}>
            ADD TO CART
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: theme.COLORS.secondary }]}
          onPress={() => {
            // Navigate to payment screen with course details
            navigation.navigate("PAYMENT_SCREEN", {course: course});
          }}
        >
          <Text style={[FONTS.h4, { color: theme.COLORS.text }]}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 180,
    backgroundColor: "#e3e3e3",
  },
  priceBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  discount: {
    fontSize: 16,
    fontWeight: "600",
    color: "green",
  },
  strikePrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  content: {
    padding: 16,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#d0d8f7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#3a3a3a",
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    gap: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    gap: 6,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 13,
    color: "#444",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
    gap: 10,
  },
  btn: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
