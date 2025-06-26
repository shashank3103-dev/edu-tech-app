import {
  ActivityIndicator,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS, FONTS, ICONS } from "../resources";
import { useAppTheme } from "../resources/ThemeContext";

interface BtnProps {
  style: ViewStyle;
  loading?: boolean;
  title: string;
  onPress: () => void;
}
const CustomButton = (props: BtnProps) => {
  const theme = useAppTheme();
  const { style, title, onPress, loading = false } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: theme.COLORS.primary,
          marginTop: "5%",
          padding: "4%",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          flexDirection: "row",
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={theme.COLORS.text} />
      ) : (
        <Text
          style={{
            color: theme.COLORS.background,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
