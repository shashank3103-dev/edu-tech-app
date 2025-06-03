interface PhoneRequestBody {
  phoneNumber: string;
}
interface VerifyOtpRequestBody {
  otp: string;
}
interface signUpRequestBody {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}
interface verifyOtpBody {
  email: string;
  otp: string;
}
interface resendOtpBody {
  email: string;
}
interface loginBody {
  email: string;
  password: string;
}

export type {
  loginBody,
  PhoneRequestBody,
  VerifyOtpRequestBody,
  signUpRequestBody,
  verifyOtpBody,
  resendOtpBody,
};
