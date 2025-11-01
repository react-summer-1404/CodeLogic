import i18n from '../../i18n/i18n';
import * as Yup from 'yup';

export const ForgotVal1 = () => {
    return Yup.object({
        email: Yup.string()
            .required(() => i18n.t('forgotVal1.required'))
            .email(() => i18n.t('forgotVal1.email')),
    });
};
export const ForgotVal2 = () => {
    return Yup.object({
        newPassword: Yup.string()
            .required(() => i18n.t('forgotVal2.required1'))
            .min(8, () => i18n.t('forgotVal2.min')),
        gmail: Yup.string()
            .email(i18n.t('registerStepThree.validation.email_invalid'))
            .required(i18n.t('registerStepThree.validation.email_required')),
    });
};
