import {
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

const SignUp = ({ navigation }: any) => {
  const theme = useAppTheme();
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          // paddingVertical: 20,
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
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            label="First Name"
            mode="outlined"
            keyboardType="email-address"
            value={input}
            // onChangeText={setInput}
            onChangeText={(text) => {
              setInput(text);
            }}
            style={{
              width: "49%",
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
            label="Last Name"
            mode="outlined"
            keyboardType="email-address"
            value={input}
            // onChangeText={setInput}
            onChangeText={(text) => {
              setInput(text);
            }}
            style={{
              width: "49%",
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
        </View>
        <TextInput
          label="Email Address"
          mode="outlined"
          keyboardType="email-address"
          value={input}
          // onChangeText={setInput}
          onChangeText={(text) => {
            setInput(text);
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
          value={input}
          // onChangeText={setInput}
          onChangeText={(text) => {
            setInput(text);
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
          secureTextEntry
          value={input}
          // onChangeText={setInput}
          onChangeText={(text) => {
            setInput(text);
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
          label="Confirm Password"
          mode="outlined"
          value={input}
          // onChangeText={setInput}
          onChangeText={(text) => {
            setInput(text);
          }}
          style={{
            width: "90%",
            marginBottom: 20,
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
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
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
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
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
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            checkBoxColor={theme.COLORS.primary}
          />
          <Text
            style={[
              FONTS.body6,
        
              { color: theme.COLORS.text, marginLeft: 10, flex: 1,
                // fontSize: 12,
                // fontFamily: "Quicksand-Regular",
               },
            ]}
          >
           I have Read and agree to all Terms & Conditions and Privacy Policy.
          </Text>
         
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("BottomTabStack")}
          style={[styles.button, { backgroundColor: theme.COLORS.primary }]}
        >
          <Text style={{ color: theme.COLORS.background, ...FONTS.h4 }}>
            Join Now
          </Text>
        </TouchableOpacity>
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
          <TouchableOpacity
            style={
              {
                //       marginTop: 20,
              }
            }
            onPress={() => navigation.navigate("LOGIN")}
          >
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
