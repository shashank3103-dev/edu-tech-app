import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useAppTheme } from "../../resources/ThemeContext";
import { FONTS, ICONS } from "../../resources";
import { TextInput } from "react-native-paper";
import CheckBox from "react-native-check-box";
import URLManager from "../../networkLayer/URLManager";
import CustomButton from "../../components/CustomButton";
const SignUp = ({ navigation }: any) => {
  const theme = useAppTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"tutor" | "student" | "">("");
  const [isTerms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    try {
      setLoading(true);
      if (!name || !email || !password || !phone || !role || !isTerms) {
        Alert.alert(
          "Validation Error",
          "Please fill all fields and accept terms."
        );
        setLoading(false);
        return;
      }
      let urlManager = new URLManager();
      const payload = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        role: role,
      };
      console.log(payload);
      return urlManager
        .userOrTutorSignUp(payload)
        .then((res) => {
          return res.json() as Promise<any>;
        })
        .then((res: any) => {
          if (!res.error) {
            console.log(res);
            navigation.navigate("OTP", { email: payload.email });
          } else {
        
              Alert.alert("Error", res.error);
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
    <SafeAreaView
      style={[
        {
          flex: 1,
          padding: 20,
        },
        { backgroundColor: theme.COLORS.background },
      ]}
    >
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
        // onPress={() => navigation.navigate("BottomTabStack")}
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
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 30,
        }}
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
        <Text style={[FONTS.h2, { color: theme.COLORS.text }]}>
          Create Your Account
        </Text>
        <Text
          style={[
            FONTS.body5,
            { color: theme.COLORS.text, textAlign: "center", marginBottom: 20 },
          ]}
        >
          Sign up as a student or a tutor and start your educational journey
          with us.
        </Text>

        <TextInput
          label="First Name"
          mode="outlined"
          keyboardType="email-address"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          style={{
            width: "90%",
            marginBottom: 10,
          }}
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
          label="Email Address"
          mode="outlined"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={{
            width: "90%",
            marginBottom: 10,
          }}
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
          label="Phone Number"
          mode="outlined"
          keyboardType="number-pad"
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
          }}
          style={{
            width: "90%",
            marginBottom: 10,
          }}
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
          // secureTextEntry
          keyboardType="visible-password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={{
            width: "90%",
            marginBottom: 10,
          }}
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
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            width: "90%",
          }}
        >
          <CheckBox
            isChecked={role === "student"}
            onClick={() => setRole("student")}
            checkBoxColor={theme.COLORS.primary}
          />
          <Text
            style={[
              FONTS.h3,
              { color: theme.COLORS.text, marginLeft: 10, flex: 1 },
            ]}
          >
            Student
          </Text>
          <CheckBox
            isChecked={role === "tutor"}
            onClick={() => setRole("tutor")}
            checkBoxColor={theme.COLORS.primary}
          />
          <Text
            style={[
              FONTS.h3,
              { color: theme.COLORS.text, marginLeft: 10, flex: 1 },
            ]}
          >
            Tutor
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            width: "90%",
          }}
        >
          <CheckBox
            isChecked={isTerms}
            onClick={() => setTerms(!isTerms)}
            checkBoxColor={theme.COLORS.primary}
          />
          <Text
            style={[
              FONTS.body6,
              {
                color: theme.COLORS.text,
                marginLeft: 10,
                flex: 1,
              },
            ]}
          >
            I have Read and agree to all Terms & Conditions and Privacy Policy.
          </Text>
        </View>
     

<CustomButton
            title="Sign Up"
            onPress={handleSignUp}
            style={{ width: "90%", borderRadius: 8 }}
          />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <Text
            style={[FONTS.body5, { color: theme.COLORS.text, marginEnd: 5 }]}
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LOGIN")}>
            <Text
              style={[
                FONTS.body5,
                { color: theme.COLORS.text, textDecorationLine: "underline" },
              ]}
            >
              Sign In Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
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
