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
