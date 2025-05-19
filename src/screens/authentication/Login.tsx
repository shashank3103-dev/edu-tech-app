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
} from "react-native";
import { TextInput } from "react-native-paper";
import { useAppTheme } from "../../resources/ThemeContext";
import { FONTS, SHADOW } from "../../resources/Theme";
import { COLORS, ICONS } from "../../resources";
import { ScrollView } from "react-native-gesture-handler";

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
        <TouchableOpacity style={{ 
          // position: "absolute", top: 50, right: 20
          alignSelf:'flex-end',

         }}
          onPress={() => navigation.navigate("BottomTabStack")}>
        <Text
          style={[
            FONTS.body4,
            { color: theme.COLORS.text },
            {
              textDecorationLine: "underline",
           
            },
          ]}
        >
          Skip {'>'}
        </Text>
        </TouchableOpacity>
        <Image
          source={ICONS.APP_LOGO_ICON}
          style={{
            width: 200,
            height: 200,
            tintColor:theme.COLORS.secondary,
      
          }}
          resizeMode="contain"
        />
        <Text
          style={[
            FONTS.h2,
            { color: theme.COLORS.text, marginBottom: 10, textAlign: "center" },
          ]}
        >
          Login To Your Account
        </Text>
        <Text
          style={[
            FONTS.body5,
            { color: theme.COLORS.text, marginBottom: 20, textAlign: "center" },
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
          // secureTextEntry
          selectTextOnFocus
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

        <TouchableOpacity
          onPress={handleLogin}
          style={[
            styles.button,
            { backgroundColor: theme.COLORS.primary },
          ]}
        >
          <Text style={{ color: theme.COLORS.background, ...FONTS.h4 }}>
            Login
          </Text>
        </TouchableOpacity>
        
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    alignItems: "center",
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
  
  },
});
