import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useAppTheme } from "../../resources/ThemeContext";
import { FONTS, ICONS } from "../../resources";
// import OtpInputs from 'react-native-otp-inputs';

const OtpScreen = () => {
  const theme = useAppTheme();
  const [otp, setOtp] = useState("");
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
        <Text style={[FONTS.h2, { color: theme.COLORS.text }]}> Enter OTP</Text>
        <Text
          style={[
            FONTS.body5,
            { color: theme.COLORS.text, textAlign: "center" },
          ]}
        >
          We've sent a 6-digit verification code to your registered mobile
          number
        </Text>
        {/* <OtpInputs
            // style={}
            style={{
              width: '95%',
              alignSelf: 'center',
              height: 150,
              flexDirection: 'row',
              // alignItems:''
              color: theme.COLORS.primary,
              marginTop: 10,
              justifyContent: 'space-evenly',
            }}
            numberOfInputs={6}
            // value={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            handleChange={code => {
              console.log(code);
              setOtp(code);
            }}
            // keyboardType="number-pad"
            // autoFocusOnLoad
            inputContainerStyles={{
              width: 50,
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              // color: COLORS.black,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            focusStyles={{
              borderColor: theme.COLORS.primary,
            }}
            inputStyles={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '400',
              color:theme.COLORS.primary,
            }}
            // onCodeFilled={code => {
            //   console.log(`Code is ${code}, you are good to go!`);
            // }}
            selectionColor={theme.COLORS.black}
            autofillFromClipboard={false}
          /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
  },
});
