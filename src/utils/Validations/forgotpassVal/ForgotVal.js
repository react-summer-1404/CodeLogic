import i18n from "../../i18n";
import * as Yup from "yup";

export const ForgotVal1 = () => {
    return Yup.object({
        email: Yup.string().required(() => i18n.t('forgotVal1.required')).email(() => i18n.t('forgotVal1.email'))
    })
}
export const ForgotVal2 = () => {
    return Yup.object({

        password: Yup.string().required(() => i18n.t('forgotVal2.required1'))
            .min(8, () => i18n.t('forgotVal2.min')),
        confirmPassword: Yup.string().required(() => i18n.t('forgotVal2.required2'))
            .oneOf([Yup.ref("password")], () => ('forgotVal2.oneOf'))
    })
}