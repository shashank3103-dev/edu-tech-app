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
interface cartBody {
  courseId: string;
}
interface uploadCourseBody { 
  tittle: string;
  category: string;
  price: string;
  description: string;
  target: string;
  requirements: string;
  duration: string;
  lectures: string;
  learning_minutes: string;
  courseImage:string;
  is_published: boolean;
 }
interface SelectedImage {
  uri: string;
  type: string;
  fileName?: string;
  fileSize?: number;
}
interface checkoutBody {
  paymentMethod: any;
  shippingAddress: string;
}
interface orderPaymentBody {
  courseId: number;
}
interface razorpayVerificationBody {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  courseId: number | string; // adjust based on your DB type
}
export type {
  razorpayVerificationBody,
  orderPaymentBody,
  checkoutBody,
  uploadCourseBody,
  SelectedImage,
  cartBody,
  loginBody,
  PhoneRequestBody,
  VerifyOtpRequestBody,
  signUpRequestBody,
  verifyOtpBody,
  resendOtpBody,
};
