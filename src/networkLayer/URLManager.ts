import URLService from "./URLServices";
import { EndPoints, baseUrl } from "../resources/Constants";
import {
  cartBody,
  loginBody,
  resendOtpBody,
  signUpRequestBody,
  uploadCourseBody,
  verifyOtpBody,
} from "./Modals";

export default class URLManager {
  getData(data: number) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GETDATAENDPOINT + `${data}.json`;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "GET")
      .then((res: any) => res);
  }

  userOrTutorSignUp(data: signUpRequestBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.SIGN_UP;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "POST")
      .then((res: any) => res);
  }
  verifyEmailOTP(data: verifyOtpBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.VERIFY_OTP;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "POST")
      .then((res: any) => res);
  }
  resendEmailOTP(data: resendOtpBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.RESEND_OTP;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "POST")
      .then((res: any) => res);
  }
  loginTutorOrStudent(data: loginBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.LOGIN;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "POST")
      .then((res: any) => res);
  }
  getAllCourses() {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GET_ALL_COURSE;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, {}, "GET")
      .then((res: any) => res);
  }
  getBanners() {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GET_BANNERS;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, {}, "GET")
      .then((res: any) => res);
  }
  getProfile() {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GET_PROFILE;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, {}, "GET")
      .then((res: any) => res);
  }
  addToCart(data: cartBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.ADD_TO_CART;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "POST")
      .then((res: any) => res);
  }
  uploadCourse(data: uploadCourseBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.UPLOAD_COURSE;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "POST")
      .then((res: any) => res);
  }
}
