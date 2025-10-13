import * as Yup from "yup";
import { checkNumber } from "../common/common.validation.js";

export const RegisterValidation = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("شماره موبایل خود را وارد کنید *")
    .test("phoneNumber", "شماره موبایل نامعتبر است * ", (value) =>
      checkNumber(value)
    ),
});

export const RegisterStepTwo = Yup.object().shape({
  code: Yup.array().of(Yup.string().required("پر کردن فیلد الزامی است")),
});

export const RegisterStepThree = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل وارد شده اشتباه است *")
    .required("ایمیل خود را وارد کنید *"),
  password: Yup.string()
    .required("رمز عبور خود را وارد کنید *")
    .min(8, "رمز عبور شما باید حداقل دارای 8 کارکتر باشد *")
    .matches(/[0-9]/, "رمز عبور شما باید دارای عدد باشد *")
    .matches(/[a-z]/, "رمز عبور شما باید دارای حروف کوچک باشد *")
    .matches(/[A-Z]/, "رمز عبور شما باید دارای حروف بزرگ باشد *")
    .matches(
      /[^\w]/,
      "رمز عبور شما باید دارای یکی از سمبل های (!,@,#,$,%,^,&,*) باشد *"
    ),
  confirmPassword: Yup.string()
    .required("تکرار رمز عبور را وارد کنید *")
    .oneOf([Yup.ref("password")], "رمز عبور شما همخوانی ندارد *"),
});
