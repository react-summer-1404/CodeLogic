
import { ErrorMessage, Field, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import initialData from '../../../components/common/Form/initialData/initialData'
import { motion } from 'framer-motion'


const validationSchema = Yup.object({
    email: Yup.string().required('وارد کردن ایمیل الزامی است').email("ایمیل معتبر نیست"),

})
const ForgotPasswordStepOne = () => {


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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex flex-col rounded-[60px] overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg md:flex-row max-w-[1250px] w-full min-h-[739px] p-2 '>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", type: "spring", stiffness: 300, delay: 0.5 }}
                    className=' flex flex-1 flex-col  p-17  gap-18 '>
                    <Link className=' pr-9 bg-[url(./icons/home.png)] bg-no-repeat  bg-[right_1px_center] text-[14px] hover:text-blue-400 transition duration-300'>صفحه اصلی</Link>
                    <div className='flex flex-col justify-center items-center gap-3 p-5 '>
                        <div className='flex flex-col justify-center items-center gap-2  '>
                            <h2 className='text-[24px] font-bold text-[#008C78] mb-2 '>فراموشی رمز عبور</h2>
                            <h3 className='text-[16px]'>ایمیل خود را برای تغییر رمز درخواست وارد کنید</h3>
                        </div>
                        <div className=' w-full mt-7 px-6' >
                            <Formik
                                initialValues={initialData}
                                onSubmit={(values) => console.log(values)}
                                validationSchema={validationSchema}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className=' flex flex-col gap-9'>
                                            <div className='flex flex-col gap-1'>
                                                <Field className={` outline-none bg-[url(./icons/email.png)] bg-no-repeat  bg-[length:14px_13px] bg-[right_20px_center]  bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-12 py-3  placeholder:text-[15px] ${errors.email && touched.email ? "border-[#EF5350] border-1 " : ""}`} type="email" name='email' id='email' placeholder='ایمیل خود را وارد کنید' />
                                                <ErrorMessage name={'email'} component={"span"} className='text-[#EF5350] text-[14px] ' />
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: "1.03", boxShadow: "0 0 8px #cccccc" }}
                                                whileTap={{ scale: "0.98" }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                type='submit' onClick={(values) => { console.log(values) }} className='w-full bg-[#008C78] text-white text-[16px] rounded-full px-5 py-3 '>ارسال درخواست</motion.button>
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
                    transition={{ ease: "easeOut", type: "spring", stiffness: 300, delay: 0.5 }}
                    className='flex flex-1 flex-col items-center justify-center  p-9  bg-[#EEFFFC] dark:bg-gray-800/50 rounded-[60px] relative'>
                    <div onClick={handleDark} className={` cursor-pointer py-3 px-2 w-12 h-6 rounded-full absolute top-14 left-7 flex ${isDark ? "bg-yellow-300/40 justify-end " : "bg-blue-900/30  justify-start"} `}>
                        <div className='w-3 h-[90%] rounded-full transition-all duration-500 flex items-center '>
                            <img src={`${isDark ? "./icons/sun.png" : "./icons/moon.png"}  `} alt="" />
                        </div>
                    </div>
                    <div className=' mt-5 flex flex-col  items-center justify-center gap-6'>
                        <div className=' flex flex-col justify-center items-center  '>
                            <img className=' max-w-[435px] w-full min-h-[409.592529296875px]  ' src="./images/forgot1.png" alt="" />
                        </div>
                        <div className=' flex flex-col justify-center items-center  gap-4'>
                            <h2 className='text-[#005B77] tracking-wide mt-2 text-[24px] font-extrabold '>فراموشی رمز عبور پایان راه نیست!</h2>
                            <p className='text-[16px] text-center'> با وارد کردن ایمیلتان، لینک تغییر رمز را دریافت می‌کنید و دوباره به دنیای یادگیری برمی‌گردید.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div >
    )

}

export default ForgotPasswordStepOne