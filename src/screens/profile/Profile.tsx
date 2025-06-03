import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppTheme } from "../../resources/ThemeContext";
import { FONTS, UTILITIES } from "../../resources";

const Profile = ({ navigation }: any) => {
  const theme = useAppTheme();
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        { backgroundColor: theme.COLORS.background },
      ]}
    >
      <Text
        style={[
          FONTS.h3,
          { color: theme.COLORS.text, marginLeft: 10, flex: 1 },
        ]}
      >
        Profile
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.COLORS.primary }]}
        onPress={async () => {
          UTILITIES.clearEncryptedStorage().then((res) => {
            navigation.replace("LOGIN");
          });
        }}
      >
        <Text style={{ color: theme.COLORS.background, ...FONTS.h4 }}>
         Log Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    // height:40,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
  },
});
