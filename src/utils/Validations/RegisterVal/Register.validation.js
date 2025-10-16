import * as Yup from "yup";
import { checkNumber } from "../common/common.validation.js";
import i18n from "../../i18n";

export const RegisterValidation = () => {
  return Yup.object().shape({
    phoneNumber: Yup.string()
      .required(() => i18n.t("registerStepOne.validation.required"))
      .test(
        "phoneNumber",
        () => i18n.t("registerStepOne.validation.invalid"),
        (value) => checkNumber(value)
      ),
  });
};

export const RegisterStepTwo = () =>
  Yup.object().shape({
    code: Yup.array().of(
      Yup.string().required(i18n.t("registerStepTwo.validation.required"))
    ),
  });

export const RegisterStepThree = () =>
  Yup.object().shape({
    email: Yup.string()
      .email(i18n.t("registerStepThree.validation.email_invalid"))
      .required(i18n.t("registerStepThree.validation.email_required")),
    password: Yup.string()
      .required(i18n.t("registerStepThree.validation.password_required"))
      .min(8, i18n.t("registerStepThree.validation.password_min"))
      .matches(/[0-9]/, i18n.t("registerStepThree.validation.password_number"))
      .matches(/[a-z]/, i18n.t("registerStepThree.validation.password_lower"))
      .matches(/[A-Z]/, i18n.t("registerStepThree.validation.password_upper"))
      .matches(/[^\w]/, i18n.t("registerStepThree.validation.password_symbol")),
    confirmPassword: Yup.string()
      .required(i18n.t("registerStepThree.validation.confirmPassword_required"))
      .oneOf(
        [Yup.ref("password")],
        i18n.t("registerStepThree.validation.confirmPassword_match")
      ),
  });
