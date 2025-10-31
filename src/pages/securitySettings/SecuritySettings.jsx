import { ErrorMessage, Field, Form, Formik } from 'formik';
import { delay, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { securitySettingsVal } from '../../utils/Validations/securitySettings/securitySettingsVal';
import { useTranslation } from 'react-i18next';
const SecuritySettings = () => {
    const { t, i18n } = useTranslation();
    //// validation ////
    const [validationSchema, setValidationSchema] = useState(securitySettingsVal());
    useEffect(() => {
        setValidationSchema(securitySettingsVal());
    }, [i18n.language]);
    /// motion framer ///
    const leftAnimate = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 300, duration: 0.3 },
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: { duration: 0.35, type: 'spring', stiffness: 250, delay: 0.2 },
        },
    };
    const rightAnimate = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 300, duration: 0.35, delay: 0.2 },
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: { duration: 0.35, type: 'spring', stiffness: 250 },
        },
    };
    const buttomAnimate = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, duration: 0.35, delay: 0.2 },
        },
        exit: {
            opacity: 0,
            y: -60,
            transition: { duration: 0.35, type: 'spring', stiffness: 250 },
        },
    };
    const buttonAnimate = {
        hover: {
            scale: 1.1,
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            transition: { duration: 0.3, type: 'spring', stiffness: 300 },
        },
        tap: {
            scale: 0.98,
        },
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 300, duration: 0.35, delay: 0.2 },
        },
    };

    return (
        <div className="bg-[#F3F4F6] dark:bg-[#333]  w-full h-full p-8 flex flex-col gap-5 my-6 rounded-4xl ">
            <div>
                <Formik
                    initialValues={{ currentPassword: '', newPassword: '' }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <div className="flex justify-between flex-wrap">
                            <motion.div
                                variants={rightAnimate}
                                initial="hidden"
                                animate="visible"
                                className="w-[45%] flex flex-col gap-4 dark:text-[#ffff] "
                            >
                                <label className="text-[16px] dark:text-[#ffff] ">
                                    {t('securitySetting.currentPassword')}
                                </label>
                                <Field
                                    placeholder={t('securitySetting.currentPassPlaceHolder')}
                                    type="password"
                                    name="currentPassword"
                                    id="currentPassword"
                                    className="w-full bg-[#FFFFFF] dark:bg-black placeholder:text-[16px] focus:outline-none
                                     placeholder:text-[#848484] rounded-[16px] py-2 px-3  border border-[#EAEAEA] shadow"
                                />
                                <ErrorMessage
                                    name={'currentPassword'}
                                    component={'span'}
                                    className="text-[#EF5350] text-[14px] "
                                />
                            </motion.div>
                            <motion.div
                                variants={leftAnimate}
                                initial="hidden"
                                animate="visible"
                                className="w-[45%] flex flex-col gap-4 dark:text-[#ffff]"
                            >
                                <label className="text-[16px] dark:text-[#ffff]">
                                    {t('securitySetting.newPassword')}
                                </label>
                                <Field
                                    placeholder={t('securitySetting.newPassPlaceHolder')}
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    className="w-full dark:bg-black bg-[#FFFFFF] placeholder:text-[16px] focus:outline-none
                                     placeholder:text-[#848484] rounded-[16px] py-2 px-3  border border-[#EAEAEA] shadow"
                                />
                                <ErrorMessage
                                    name={'newPassword'}
                                    component={'span'}
                                    className="text-[#EF5350] text-[14px] "
                                />
                            </motion.div>
                            <motion.button
                                variants={buttonAnimate}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                                type="submit"
                                className="px-4 py-3 mt-7 text-[#ffff] text-[16px] bg-[#008C78] cursor-pointer rounded-[16px]"
                            >
                                {t('securitySetting.changePass')}
                            </motion.button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="mt-7">
                <Formik
                    initialValues={{ currentPassword: '', twoStepEnabled: false }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <motion.div
                            variants={buttonAnimate}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col gap-4 w-[45%] "
                        >
                            <label className="text-[16px] dark:text-[#ffff] ">
                                {t('securitySetting.currentPassword')}
                            </label>
                            <Field
                                placeholder={t('securitySetting.currentPassPlaceHolder')}
                                type="password"
                                name="currentPassword"
                                id="currentPassword"
                                className="w-full bg-[#FFFFFF] dark:bg-black dark:text-[#ffff] placeholder:text-[16px] focus:outline-none
                                     placeholder:text-[#848484] rounded-[16px] py-2 px-3  border border-[#EAEAEA] shadow "
                            />
                            <ErrorMessage
                                name={'currentPassword'}
                                component={'span'}
                                className="text-[#EF5350] text-[14px] "
                            />
                            <div className="flex gap-3 mt-4">
                                <label className="text-[16px] dark:text-[#ffff] ">
                                    {t('securitySetting.twpStepEnabled')}
                                </label>
                                <Field type="checkbox" id="twoStepEnabled" name="twoStepEnabled" />
                            </div>
                        </motion.div>
                        <motion.button
                            variants={buttonAnimate}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            whileTap="tap"
                            type="submit"
                            className="px-4 py-3 mt-7 text-[#ffff] text-[16px] bg-[#008C78] cursor-pointer rounded-[16px]"
                        >
                            {t('securitySetting.saveSettings')}
                        </motion.button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default SecuritySettings;
