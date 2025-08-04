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
import {  ICONS, UTILITIES } from "../../resources";
import URLManager from "../../networkLayer/URLManager";
import { storageKeys } from "../../resources/Constants";
import CustomButton from "../../components/CustomButton";
import {useDispatch} from 'react-redux';
import {setUserData} from '../../stateManagement/slices/authSlice';


const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const theme = useAppTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleLogin() {
    try {
      setLoading(true);
      if (!password || !email) {
        ToastAndroid.show("Please fill all fields", ToastAndroid.LONG);
        setLoading(false);
        return;
      }
      let urlManager = new URLManager();
      const payload = {
        email: email,
        password: password,
      };
      console.log(payload);
      return urlManager
        .loginTutorOrStudent(payload)
        .then((res) => {
          return res.json() as Promise<any>;
        })
        .then((res: any) => {
          if (!res.error) {
            console.log(res);
            const user = res.user;
            const role = user.tutor ? 'tutor' : 'student';

            dispatch(
              setUserData({
                user: user,
                token: res.token,
                role: role as 'student' | 'tutor' | 'admin',
              }),
            );

            UTILITIES.setDataInEncryptedStorage(storageKeys.kTOKEN, res.token);
            UTILITIES.setDataInEncryptedStorage(storageKeys.kROLE, role);

            ToastAndroid.show(res.message, ToastAndroid.SHORT);

            navigation.reset({
              index: 0,
              routes: [{name: 'BottomTabStack'}],
            });
          } else {
            ToastAndroid.show(res.error || "Login failed", ToastAndroid.SHORT);
          }
          console.log(res);
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
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
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
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
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
          <View
            style={{
              flex: 1,
              width: "90%",
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
              }}
              onPress={() => navigation.navigate("FORGOT_PASSWORD")}
            >
              <Text style={[FONTS.body5, { color: theme.COLORS.text }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            title="Login"
            onPress={handleLogin}
            style={{ width: "90%", borderRadius: 8 }}
          />
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
