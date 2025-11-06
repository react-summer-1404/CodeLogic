import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import TranslateButton from '../../../components/TranslateButton/TranslateButton';
import { useTranslation } from 'react-i18next';
import { Login1Val } from '../../../utils/Validations/loginVal/LoginVal';
import Login from '../../../core/services/api/post/login';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import loginData from '../../../components/common/Form/initialData/loginData';
import sun from '../../../assets/Icons/A/sun.png';
import moon from '../../../assets/Icons/A/moon.png';
import eyeClose from '../../../assets/Icons/A/eyeClose.png';
import eyeOpen from '../../../assets/Icons/A/eyeOpen.png';
import login1 from '../../../assets/Images/A/login1.png';
import home from '../../../assets/Icons/A/home.png';
import use from '../../../assets/Icons/A/user.png';
import lock from '../../../assets/Icons/A/lock.png';
import { setItem } from '../../../utils/helper/storage.services';
const LoginPage = () => {
    const { mutate: postLogin, isPending } = useMutation({
        mutationKey: ['LOGIN'],
        mutationFn: (values) => Login(values),
        onSettled: (data) => {
            if (data.success) {
                console.log('Login token', data.token)
                setItem('token', data.token);
                toast.success(data.message);
                navigate(`/userPanel`);
            } else if (!data.success) {
                toast.error(data.message);
            }
        },
    });

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const [isDark, setIsDark] = useState(false);
    const handleDark = () => {
        setIsDark((prev) => !prev);
    };

    const [showPassword, setShowPassword] = useState(false);
    const handlePassword = () => {
        setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);
    const [validationSchema, setValidationSchema] = useState(Login1Val());
    useEffect(() => {
        setValidationSchema(Login1Val());
    }, [i18n.language]);

    return (
        <div className="bg-[#EAEAEA] dark:bg-[#1E1E1E] min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col md:flex-row  overflow-hidden  bg-[#ffff] dark:bg-[#333] dark:text-white shadow-lg  w-[90%] sm:w-[95%] md:w-[90%] h-[72.17%] lg:h-[72.17%] rounded-[60px] p-2 "
            >
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: 'easeOut', type: 'spring', stiffness: 300, delay: 0.5 }}
                    className=" flex flex-1 flex-col   p-17  gap-10 "
                >
                    <div className="flex justify-between items-center">
                        <Link
                            to={'/'}
                            className=" pr-8  bg-no-repeat bg-[length:22.489788055419922px_20px] bg-[right_1px_center] text-[14px]
                             hover:text-blue-400 transition duration-300"
                            style={{ backgroundImage: `url(${home})` }}
                        >
                            {t('login.HomePage')}
                        </Link>
                        <TranslateButton />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5  ">
                        <h2 className="text-[24px] font-bold text-[#008C78] ">
                            {' '}
                            {t('login.LoginToUserAccount')}{' '}
                        </h2>
                        <div className="w-full mt-7 px-6">
                            <Formik
                                initialValues={loginData}
                                onSubmit={(values) => {
                                    console.log(values);
                                    postLogin(values);
                                }}
                                validationSchema={validationSchema}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className=" flex flex-col gap-2 ">
                                            <div className="">
                                                <Field
                                                    className={`outline-none  bg-no-repeat  bg-[right_20px_center]  bg-[#F3F4F6] dark:bg-gray-500  w-full rounded-full px-13 py-3  placeholder:text-[15px] ${errors.name && touched.name
                                                            ? 'border-[#EF5350] border-1 '
                                                            : ''
                                                        }`}
                                                    style={{ backgroundImage: `url(${lock})` }}
                                                    type="text"
                                                    name="phoneOrGmail"
                                                    id="phoneOrGmail"
                                                    placeholder={t('login.EmailOrPhoneNumber')}
                                                />
                                            </div>
                                            <ErrorMessage
                                                name={'phoneOrGmail'}
                                                component={'span'}
                                                className="text-[#EF5350] text-[14px] "
                                            />
                                            <div className=" relative mt-6">
                                                <Field
                                                    className={` bg-no-repeat  bg-[right_20px_center] bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-13 py-3 outline-none placeholder:text-[15px] ${errors.password && touched.password
                                                            ? 'border-[#EF5350] border-1 '
                                                            : ''
                                                        } `}
                                                    style={{ backgroundImage: `url(${use})` }}
                                                    type={showPassword ? 'text' : 'password'}
                                                    name="password"
                                                    id="password"
                                                    placeholder={t('login.password')}
                                                />
                                                <img
                                                    onClick={handlePassword}
                                                    src={showPassword ? eyeClose : eyeOpen}
                                                    alt=""
                                                    className=" cursor-pointer absolute left-7 top-1/2 -translate-y-1/2 w-[17px] h-[15px] object-cover  "
                                                />
                                            </div>
                                            <ErrorMessage
                                                name={'password'}
                                                component={'span'}
                                                className="text-[#EF5350] text-[14px] "
                                            />
                                            <div className="w-full flex justify-between mt-5 ">
                                                <div className="flex gap-2">
                                                    <Field
                                                        className=""
                                                        type="checkbox"
                                                        name="rememberMe"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        className=" text-[14px]"
                                                        htmlFor="rememberMe"
                                                    >
                                                        {t('login.RememberMe')}
                                                    </label>
                                                </div>
                                                <Link
                                                    to={'/forgotPassOne'}
                                                    className="text-[13px] text-[#848484] hover:text-blue-400 transition duration-300"
                                                >
                                                    {t('login.ForgotPassword')}
                                                </Link>
                                            </div>
                                            <motion.button
                                                whileHover={{
                                                    scale: '1.03',
                                                    boxShadow: '0 0 8px #cccccc',
                                                }}
                                                whileTap={{ scale: '0.98' }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                                type="submit"
                                                disabled={isPending}
                                                className="w-full bg-[#008C78] text-white text-[16px] rounded-full mt-5 px-5 py-3  "
                                            >
                                                {t('login.login')}
                                            </motion.button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="text-[14px]">
                            {t('login.DontHaveAccount?')}{' '}
                            <Link
                                to={'/RegisterStepOne'}
                                className="text-[#008C78] hover:text-blue-500 transition duration-300"
                            >
                                {t('login.Register')}
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', type: 'spring', stiffness: 300, delay: 0.5 }}
                    className="flex flex-1 flex-col items-center justify-center  p-9  bg-[#EEFFFC] dark:bg-[#454545] rounded-[60px] relative"
                >
                    <div
                        onClick={handleDark}
                        className={` cursor-pointer py-3 px-2  w-12 h-6   rounded-full  absolute top-14 left-7 flex  ${isDark
                                ? 'bg-yellow-300/40 justify-end '
                                : 'bg-blue-900/30  justify-start'
                            } `}
                    >
                        <div className="w-3 h-[90%] rounded-full transition-all duration-500 flex items-center ">
                            <img src={isDark ? sun : moon} alt="" />
                        </div>
                    </div>
                    <div className=" mt-5 flex flex-col  items-center justify-center gap-6">
                        <div className=" flex flex-col justify-center items-center  ">
                            <img
                                className=" max-w-[435px] w-full min-h-[409.592529296875px]  "
                                src={login1}
                                alt=""
                            />
                        </div>
                        <div className=" flex flex-col justify-center items-center  gap-4">
                            <h2 className="text-[#005B77] tracking-wide mt-2 text-[24px] font-extrabold ">
                                {t('login.Title1')}
                            </h2>
                            <p className="text-[16px] text-center">{t('login.Caption1')}</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
