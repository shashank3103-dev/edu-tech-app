// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";

export const platform = Platform.OS;
//
export const kHEADERLANGUAGE = "en_US";
export const kCLIENTVERSION = "1.2.1:" + platform;

export const baseUrl =
  // 'http://10.0.2.2:11000'
 'https://7c9b-122-161-52-210.ngrok-free.app'

// Used for async storage
export const storageKeys = {
  kTOKEN: "token",
  kEMAIL: "email",
  kPASSWORD: "password",
  kPROFILE_IMAGE: "profileImage",
  kPROFILE_DETAILS: "profileDetails",
  kDEVICETOKEN: "deviceToken",
};

export const EndPoints = {
  GETDATAENDPOINT: "/send-otp",
  VERIFY_OTP: "/api/user/verifyEmail-otp",
  RESEND_OTP: "/api/user/resend-otp",
  SIGN_UP: "/api/user/signup",
  LOGIN: "/api/user/login",
};

export default {
  platform,
  kHEADERLANGUAGE,
  kCLIENTVERSION,
  baseUrl,
  EndPoints,
};
