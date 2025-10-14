import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import initialData from '../../../components/common/Form/initialData/initialData'
import { motion } from 'framer-motion'



const validationSchema = Yup.object({
    verifyCode: Yup.array().of(Yup.string().matches(/^[0-9]$/, "فقط عدد مجاز است"))
})
const initialValues = { verifyCode: ['', '', '', '', ''] }

const LoginValidationPage = () => {



    const [isDark, setIsDark] = useState(false)
    const handleDark = () => {
        setIsDark((prev) => !prev)
    }
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark])


    return (
        <div className='bg-[#EAEAEA] min-h-screen flex items-center justify-center'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex flex-col rounded-[60px] overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg md:flex-row max-w-[1250px] w-full min-h-[739px] p-2 '>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", type: "spring", stiffness: 300, delay: 0.5 }}
                    className=' flex flex-1 flex-col  p-17  gap-10 '>
                    <Link className=' pr-8 bg-[url(./icons/back.png)] bg-no-repeat  bg-[right_1px_center] text-[14px] hover:text-blue-400 transition duration-300'>بازگشت</Link>
                    <div className='flex flex-col justify-center items-center gap-3 p-5 '>
                        <div className='flex flex-col justify-center items-center gap-2  '>
                            <h2 className='text-[24px] font-bold text-[#008C78] mb-2 '>ورود به حساب کاربری</h2>
                            <h3 className='text-[13px]'>رمز یکبار مصرف ارسال شده را وارد کنید</h3>
                        </div>
                        <div

                            className='w-full mt-7 px-7'>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values) => { console.log(values) }}
                                validationSchema={validationSchema}
                            >
                                {({ errors, touched, values }) => (
                                    <Form>
                                        <div className=' flex flex-col gap-4 px-3 ' >
                                            <div className='flex justify-between  '>
                                                {Array.from({ length: 5 }).map((number, i) => {
                                                    const val = values.verifyCode[i]
                                                    const hasError = errors.verifyCode && touched.verifyCode;
                                                    return (
                                                        <div key={i} className=' flex flex-col gap-5'>
                                                            <Field
                                                                type='text'
                                                                name={`verifyCode[${i}]`}
                                                                placeholder=''
                                                                maxLength="1"
                                                                className={`w-12 h-12 text-center rounded-xl text-lg bg-[#F3F4F6] shadow-md outline-none transition-colors duration-200 ${touched.verifyCode?.[i] && errors.verifyCode?.[i] ? "border-[#EF5350] border-[2px] " :
                                                                    touched.verifyCode?.[i] ? "border-green-500" : "border-green-500"
                                                                    } `}
                                                            />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            {errors.verifyCode && touched.verifyCode && (
                                                <div className=' whitespace-pre-line text-red-600 text-sm mt-2'>
                                                    {typeof errors.verifyCode === "string" ? errors.verifyCode : errors.verifyCode.join("\n")}
                                                </div>
                                            )}
                                            <motion.button
                                                whileHover={{ scale: "1.03", boxShadow: "0 0 8px #cccccc" }}
                                                whileTap={{ scale: "0.98" }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className=' mt-8  w-full bg-[#008C78] text-white text-[16px] rounded-full px-5 py-3  '>تایید رمز یکبار مصرف</motion.button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeOut", type: "spring", stiffness: 300, delay: 0.5 }}
                            className='text-[14px]'>01:23</motion.p>

                    </div>

                </motion.div>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", type: "spring", stiffness: 300, delay: 0.5 }}
                    className='flex flex-1 flex-col items-center justify-center  p-9  bg-[#EEFFFC] dark:bg-gray-800/50 rounded-[60px] relative'>
                    <div onClick={handleDark} className={` cursor-pointer py-3 px-2  w-12 h-6   rounded-full  absolute top-14 left-7 flex  ${isDark ? "bg-yellow-300/40 justify-end " : "bg-blue-900/30  justify-start"} `}>
                        <div className='w-3 h-[90%] rounded-full transition-all duration-500 flex items-center '>
                            <img src={`${isDark ? "./icons/sun.png" : "./icons/moon.png"}  `} alt="" />
                        </div>
                    </div>
                    <div className=' mt-5 flex flex-col  items-center justify-center gap-6'>
                        <div className=' flex flex-col justify-center items-center  '>
                            <img className=' w-95 h-95  ' src="./images/login2.png" alt="" />
                        </div>
                        <div className=' flex flex-col justify-center items-center  gap-4'>
                            <h2 className='text-[#005B77] tracking-wide mt-2 text-[24px] font-extrabold '>تنها یک قدم تا دنیای یادگیری!</h2>
                            <p className='text-[16px] text-center'>  فرصت رشد، پیشرفت و ساختن آینده‌ای بهتر همین‌جاست — همراه با ما، یک قدم جلوتر باشید!</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default LoginValidationPage