import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useAppTheme } from "../../resources/ThemeContext";
import { FONTS, SHADOW } from "../../resources/Theme";
import { COLORS, ICONS } from "../../resources";

const Login = ({ navigation }: any) => {
  const theme = useAppTheme();
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (input.trim() === "") {
      setError(true);
    } else {
      setError(false);
      // Navigate to Home or perform login
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.COLORS.background }]}
      >
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("BottomTabStack")}
        >
          <Text style={[FONTS.h3, { color: theme.COLORS.text }]}>Skip</Text>
          <Image
            source={ICONS.RIGHT_ARROW}
            style={{
              width: 13,
              height: 13,
              marginLeft: 5,
              tintColor: theme.COLORS.text,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={ICONS.APP_LOGO_ICON}
            style={{
              width: 200,
              height: 200,
              tintColor: theme.COLORS.secondary,
            }}
            resizeMode="contain"
          />
          <Text
            style={[
              FONTS.h2,
              {
                color: theme.COLORS.text,
                marginBottom: 10,
                textAlign: "center",
              },
            ]}
          >
            Login To Your Account
          </Text>
          <Text
            style={[
              FONTS.body5,
              {
                color: theme.COLORS.text,
                marginBottom: 20,
                textAlign: "center",
              },
            ]}
          >
            Access courses, manage your schedule, and stay connected
          </Text>

          <TextInput
            label="Email Address"
            mode="outlined"
            keyboardType="email-address"
            value={input}
            // onChangeText={setInput}
            onChangeText={(text) => {
              setInput(text);
              if (text.trim() !== "") setError(false);
            }}
            error={error}
            style={styles.input}
            theme={{
              colors: {
                text: theme.COLORS.text,
                primary: theme.COLORS.text,
                background: theme.COLORS.background,
                placeholder: "#999",
              },
            }}
          />
          {error && (
            <Text
              style={{
                color: "red",
                marginLeft: 4,
                fontSize: 12,
              }}
            >
              Email is required
            </Text>
          )}
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (text.trim() !== "") setPasswordError(false);
            }}
            error={passwordError}
            style={styles.input}
            theme={{
              colors: {
                text: theme.COLORS.text,
                primary: theme.COLORS.text,
                background: theme.COLORS.background,
                placeholder: "#999",
              },
            }}
          />
          {passwordError && (
            <Text
              style={{
                color: "red",
                marginLeft: 4,
                fontSize: 12,
              }}
            >
              Password is required
            </Text>
          )}
          <View
            style={{
              flex: 1,
              width: "90%",
              // flexDirection:'row',
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                // marginTop: 10,
              }}
              onPress={() => navigation.navigate("FORGOT_PASSWORD")}
            >
              <Text style={[FONTS.body5, { color: theme.COLORS.text }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            style={[styles.button, { backgroundColor: theme.COLORS.primary }]}
          >
            <Text style={{ color: theme.COLORS.background, ...FONTS.h4 }}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              marginHorizontal: 40,
            }}
          >
            <View
              style={{
                height: 1,
                backgroundColor: theme.COLORS.text,
                width: "40%",
              }}
            ></View>

            <Text
              style={[
                FONTS.body4,
                { color: theme.COLORS.text, marginHorizontal: 15 },
              ]}
            >
              or
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: theme.COLORS.text,
                width: "40%",
              }}
            ></View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={[styles.button, { backgroundColor: theme.COLORS.card }]}
          >
            <Image
              source={ICONS.GOOGLE}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
              }}
              resizeMode="contain"
            />
            <Text style={{ color: theme.COLORS.text, ...FONTS.h4 }}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("SIGN_UP")}
          >
            <Text style={[FONTS.body4, { color: theme.COLORS.text }]}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 20,
    paddingBottom: 30,
  },
  input: {
    width: "90%",
    marginBottom: 20,
  },
  button: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
  },
});
