import { ErrorMessage, Field, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import TranslateButton from '../../../components/TranslateButton/TranslateButton';
import { useTranslation } from 'react-i18next';
import { ForgotVal1 } from '../../../utils/Validations/forgotpassVal/ForgotVal';
import { useMutation, useMutationState } from '@tanstack/react-query';
import ResetPass1 from '../../../core/services/api/post/ResetPass1';
import { toast } from 'react-toastify';
import resetData1 from '../../../components/common/Form/initialData/resetData1';
import moon from '../../../assets/Icons/A/moon.png';
import sun from '../../../assets/Icons/A/sun.png';
import home from '../../../assets/Icons/A/home.png';
import email from '../../../assets/Icons/A/email.png';
import forgot1 from '../../../assets/Images/A/forgot1.png';

const ForgotPasswordStepOne = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [validationSchema, setValidationSchema] = useState(ForgotVal1());
    useEffect(() => {
        setValidationSchema(ForgotVal1());
    }, [i18n.language]);

    const [isDark, setIsDark] = useState(false);
    const handleDark = () => {
        setIsDark((prev) => !prev);
    };
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);
    const fadeInUp = (delay) => ({
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', delay },
        },
    });

    const { mutate: postPass, isPending } = useMutation({
        mutationKey: ['POSTPASS'],
        mutationFn: (values) => ResetPass1(values),
        onSettled: (data) => {
            if (data.success) {
                toast.success(data.message);
                navigate('/forgotPassTwo');
            } else if (!data.success) {
                toast.error(data.message);
            }
        },
    });

    return (
        <div className="bg-[#EAEAEA] dark:bg-[#1E1E1E] min-h-screen flex items-center justify-center">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col  overflow-hidden  bg-[#ffff] dark:bg-[#333] dark:text-white shadow-lg md:flex-row lg:flex-row w-[90%] sm:w-[95%] md:w-[90%] h-[72.17%] lg:h-[72.17%] rounded-[60px] p-2 "
                >
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: 'easeOut', type: 'spring', stiffness: 300, delay: 0.5 }}
                        className=" flex flex-1 flex-col  p-17  gap-18 "
                    >
                        <div className="flex justify-between items-center">
                            <Link
                                style={{ backgroundImage: `url(${home})` }}
                                to={'/'}
                                className=" pr-9  bg-no-repeat  bg-[right_1px_center] text-[14px] hover:text-blue-400 transition duration-300"
                            >
                                {t('forgotPass.homePage')}
                            </Link>
                            <TranslateButton />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 p-5 ">
                            <div className="flex flex-col justify-center items-center gap-2  ">
                                <h2 className="text-[24px] font-bold text-[#008C78] mb-2 ">
                                    {t('forgotPass.ForgotPassword')}
                                </h2>
                                <h3 className="text-[16px]">
                                    {t('forgotPass.EnterYourEmailToRequest')}
                                </h3>
                            </div>
                            <div className=" w-full mt-7 px-6">
                                <Formik
                                    initialValues={resetData1}
                                    onSubmit={(values) => {
                                        console.log(values);
                                        postPass(values);
                                    }}
                                    validationSchema={validationSchema}
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <div className=" flex flex-col gap-9">
                                                <div className="flex flex-col gap-1">
                                                    <Field
                                                        className={` outline-none bg-no-repeat  bg-[length:14px_13px] bg-[right_20px_center]
                                                       bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-12 py-3  placeholder:text-[15px] 
                                                       ${
                                                           errors.email && touched.email
                                                               ? 'border-[#EF5350] border-1 '
                                                               : ''
                                                       }`}
                                                        style={{ backgroundImage: `url(${email})` }}
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        placeholder={t('forgotPass.email')}
                                                    />
                                                    <ErrorMessage
                                                        name={'email'}
                                                        component={'span'}
                                                        className="text-[#EF5350] text-[14px] "
                                                    />
                                                </div>

                                                <motion.button
                                                    whileHover={{
                                                        scale: '1.03',
                                                        boxShadow: '0 0 8px #cccccc',
                                                    }}
                                                    whileTap={{ scale: '0.98' }}
                                                    transition={{ type: 'spring', stiffness: 300 }}
                                                    type="submit"
                                                    className="w-full bg-[#008C78] text-white text-[16px] rounded-full px-5 py-3 "
                                                >
                                                    {t('forgotPass.SubmitRequest')}
                                                </motion.button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
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
                            className={` cursor-pointer py-3 px-2 w-12 h-6 rounded-full absolute top-14 left-7 flex ${
                                isDark
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
                                    src={forgot1}
                                    alt=""
                                />
                            </div>
                            <div className=" flex flex-col justify-center items-center  gap-4">
                                <h2 className="text-[#005B77] tracking-wide mt-2 text-[24px] font-extrabold ">
                                    {t('forgotPass.title1')}
                                </h2>
                                <p className="text-[16px] text-center">
                                    {t('forgotPass.Caption1')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ForgotPasswordStepOne;
