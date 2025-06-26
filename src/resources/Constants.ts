// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";

export const platform = Platform.OS;
//
export const kHEADERLANGUAGE = "en_US";
export const kCLIENTVERSION = "1.2.1:" + platform;

export const baseUrl = "http://10.0.2.2:11000";
// "https://13d6-2409-40d2-12b7-22e1-81c8-a364-3e49-c1f1.ngrok-free.app"; // Change this to your backend URL                                      ";

// Used for async storage
export const storageKeys = {
  kROLE: "role",
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
  ADD_TO_CART: "/api/order/cart/add",
  GET_CART: "/api/order/cart/get",
  UPLOAD_COURSE: "/api/course/upload",
  CHECKOUT: "/api/order/checkout",
};

export default {
  platform,
  kHEADERLANGUAGE,
  kCLIENTVERSION,
  baseUrl,
  EndPoints,
};
