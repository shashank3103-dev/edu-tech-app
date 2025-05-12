import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import { useAppTheme } from "../../resources/ThemeContext";
import { FONTS } from "../../resources/Theme";
import ReactNativeBiometrics from "react-native-biometrics";

// const rnBiometrics = new ReactNativeBiometrics();

const Login = ({ navigation }: any) => {
  const theme = useAppTheme();
  const [input, setInput] = useState("");

  // const handleBiometricAuth = async () => {
  //   const { available, biometryType } = await rnBiometrics.isSensorAvailable();

  //   if (!available) {
  //     // Alert.alert("Biometric not available");
  //     ToastAndroid.show("Biometric not available", ToastAndroid.SHORT);
  //     return;
  //   }

  //   rnBiometrics
  //     .simplePrompt({ promptMessage: "Confirm fingerprint" })
  //     .then(resultObject => {
  //       const { success } = resultObject;

  //       if (success) {
  //         // Alert.alert("Success", "Fingerprint authenticated");
  //         ToastAndroid.show("Fingerprint authenticated", ToastAndroid.SHORT);

  //         // Navigate to home screen or dashboard
  //         navigation.navigate("HOMESCREEN");
  //       } else {
  //         // Alert.alert("Failed", "Fingerprint authentication cancelled");
  //         ToastAndroid.show("Fingerprint authentication cancelled", ToastAndroid.SHORT);
  //       }
  //     })
  //     .catch(() => {
  //       // Alert.alert("Error", "Fingerprint authentication error");
  //       ToastAndroid.show("Fingerprint authentication error", ToastAndroid.SHORT);
  //     });
  // };

  // useEffect(() => {
  //   handleBiometricAuth(); // Automatically prompt on screen load
  // }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.COLORS.background }]}
    >
      <Text
        style={[FONTS.body4, { color: theme.COLORS.text, marginBottom: 20 }]}
      >
        Login Screen
      </Text>

      <TextInput
        style={[
          styles.input,
          { borderColor: theme.COLORS.text, color: theme.COLORS.text },
        ]}
        placeholder="Enter Mobile Number"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
      />

      <TouchableOpacity
        onPress={() => {
          if (input.length === 0) {
            ToastAndroid.show(
              "Please enter a mobile number",
              ToastAndroid.SHORT
            );
            return;
          }
          // Handle login logic here
          // For example, you can call an API to authenticate the user
          // If successful, navigate to the home screen
          navigation.navigate("HOMESCREEN");
        }}
        style={[styles.button, { backgroundColor: theme.COLORS.primary }]}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Login with Fingerprint
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
