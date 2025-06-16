// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";

export const platform = Platform.OS;
//
export const kHEADERLANGUAGE = "en_US";
export const kCLIENTVERSION = "1.2.1:" + platform;

export const baseUrl =
  // 'http://10.0.2.2:11000'
  "https://394b-2409-40d2-1018-3df5-3962-3b27-680f-b590.ngrok-free.app";

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
  GET_ALL_COURSE: "/api/course/getall",
  GET_BANNERS: "/api/banner/getall",
  GET_PROFILE: "/api/user/profile",
};

export default {
  platform,
  kHEADERLANGUAGE,
  kCLIENTVERSION,
  baseUrl,
  EndPoints,
};
