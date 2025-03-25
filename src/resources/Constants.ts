// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

export const platform = Platform.OS;
//
export const kHEADERLANGUAGE = 'en_US';
export const kCLIENTVERSION = '1.2.1:' + platform;

export const baseUrl = 
'https://fakestoreapi.com'

;
// Used for async storage
export const storageKeys = {
  kTOKEN: 'token',
  kEMAIL: 'email',
  kPASSWORD: 'password',
  kPROFILE_IMAGE: 'profileImage',
  kPROFILE_DETAILS: 'profileDetails',
  kDEVICETOKEN: 'deviceToken',
};

export const EndPoints = {
  GETDATAENDPOINT: '/send-otp',
  PHONELOGIN: '/send-otp',
  VERIFY_OTP: '/check-otp/',
  GET_USER_DETAIL: '/getUserDetail',
  UPDATE_USER_DETAIL: '/updateUser',
  UPLOAD_USER_IMAGE: '/uploadProfileImage',
  COMPLETE_KYC: '/kycComplete',
  ADD_EMAIL: '/addEmail',
  VERIFY_EMAIL_OTP: '/verifyEmailOTP',
  ALL_PRODUCTS: '/products',
};

export default {
  platform,
  kHEADERLANGUAGE,
  kCLIENTVERSION,
  baseUrl,
  EndPoints,
};