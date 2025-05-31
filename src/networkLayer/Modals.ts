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

export type {PhoneRequestBody, VerifyOtpRequestBody, signUpRequestBody};