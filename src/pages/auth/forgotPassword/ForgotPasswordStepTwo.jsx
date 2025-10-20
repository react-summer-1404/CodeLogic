
import { ErrorMessage, Field, Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Yup from 'yup'
import initialData from '../../../components/common/Form/initialData/initialData'
const validationSchema = Yup.object({
    password: Yup.string().required('وارد کردن رمز عبور الزامی است').min(8, "رمز عبور باید حداقل شامل 8 کاراکتر باشد"),
    confirmPassword: Yup.string().required("تایید رمز عبور الزامی است").oneOf([Yup.ref("password")], "رمز عبور مطابقت ندارد")
})
const ForgotPasswordStepTwo = () => {

    const [isDark, setIsDark] = useState(false)
    const handleDark = () => {
        setIsDark((prev) => !prev)
    }

    const [showFirstPassword, setShowFirstPassword] = useState(false)
    const [showSecondPassword, setShowSecondPassword] = useState(false)
    const handleFirstPassword = () => {
        setShowFirstPassword((prev) => !prev)
    }
    const handleSecondPassword = () => {
        setShowSecondPassword((prev) => !prev)
    }
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark])
    const navigate = useNavigate()


    return (
        <div className='bg-[#EAEAEA] min-h-screen flex items-center justify-center'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex flex-col rounded-[60px] overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg md:flex-row lg:flex-row w-[90%] sm:w-[95%] md:w-[90%] h-[72.17%] lg:h-[72.17%] p-2 '>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", type: "spring", stiffness: 300, delay: 0.5 }}
                    className=' flex flex-1 flex-col  p-17  gap-14 '>
                    <Link to={"/forgotPassOne"} className=' pr-8 bg-[url(./icons/back.png)] bg-no-repeat  bg-[right_1px_center] text-[14px] hover:text-blue-400 transition duration-300'>بازگشت</Link>
                    <div className='flex flex-col justify-center items-center gap-3 p-5 '>
                        <div className='flex flex-col justify-center items-center gap-2  '>
                            <h2 className='text-[24px] font-bold text-[#008C78] mb-2 '>فراموشی رمز عبور</h2>
                            <h3 className='text-[16px] tracking-wide'>رمز عبور جدید برای خود تعیین کنید</h3>
                        </div>
                        <div className='w-full mt-7 px-6  '>
                            <Formik
                                initialValues={initialData}
                                onSubmit={(value) => navigate("/login")}
                                validationSchema={validationSchema}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className=' flex flex-col gap-3 ' >
                                            <div className=' relative flex flex-col '>
                                                <Field className={` outline-none bg-[url(./icons/lock.png)] bg-no-repeat   bg-[right_20px_center]  bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-13 py-3  placeholder:text-[15px] ${errors.password && touched.password ? "border-[#EF5350] border-1 " : ""} `} type={showFirstPassword ? "text" : "password"} name='password' id='password' placeholder='رمز عبور جدید' />
                                                <img onClick={handleFirstPassword} src={showFirstPassword ? "./icons/eyeClose.png" : "./icons/eyeOpen.png"} alt="" className=' cursor-pointer absolute left-7 top-1/2 -translate-y-1/2 w-[17px] h-[15px] object-cover  ' />
                                            </div>
                                            <ErrorMessage name={'password'} component={"span"} className='text-[#EF5350] text-[14px]  ' />
                                            <div className=' relative mt-6 '>
                                                <Field className={` focus:outline-none bg-[url(./icons/lock.png)] bg-no-repeat   bg-[right_20px_center]  bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-13 py-3  placeholder:text-[15px] ${errors.confirmPassword && touched.confirmPassword ? "border-[#EF5350] border-1 " : ""} `} type={showSecondPassword ? 'text' : 'password'} name='confirmPassword' id='confirmPassword' placeholder='تکرار رمز عبور' />
                                                <img onClick={handleSecondPassword} src={showSecondPassword ? "./icons/eyeClose.png" : "./icons/eyeOpen.png"} alt="" className=' cursor-pointer absolute left-7 top-1/2 -translate-y-1/2 w-[17px] h-[15px] object-cover  ' />
                                            </div>
                                            <ErrorMessage name={'confirmPassword'} component={"span"} className='text-[#EF5350] text-[14px]  ' />
                                            <motion.button
                                                whileHover={{ scale: "1.03", boxShadow: "0 0 8px #cccccc" }}
                                                whileTap={{ scale: "0.98" }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                type='submit' onClick={(values) => { console.log(values) }} className=' mt-6 w-full bg-[#008C78] text-white text-[16px] rounded-full px-5 py-3 hover : bg-8/10  transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md active:scale-[0.98] '>ثبت رمز عبور جدید</motion.button>
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
                    <div onClick={handleDark} className={` cursor-pointer py-3 px-2  w-12 h-6   rounded-full  absolute top-14 left-7 flex  ${isDark ? "bg-yellow-300/40 justify-end " : "bg-blue-900/30  justify-start"} `}>
                        <div className='w-3 h-[90%] rounded-full transition-all duration-500 flex items-center '>
                            <img src={`${isDark ? "./icons/sun.png" : "./icons/moon.png"}  `} alt="" />
                        </div>
                    </div>
                    <div className=' mt-5 flex flex-col  items-center justify-center gap-6'>
                        <div className=' flex flex-col justify-center items-center  '>
                            <img className=' max-w-[435px] w-full min-h-[409.592529296875px]  ' src="./images/forgot2.png" alt="" />
                        </div>
                        <div className=' flex flex-col justify-center items-center  gap-4'>
                            <h2 className='text-[#005B77] tracking-wide mt-2 text-[24px] font-extrabold '>قدم آخر برای بازگشت به مسیر یادگیری!</h2>
                            <p className='text-[16px] text-center'> با تعیین یک رمز عبور جدید، دوباره به حساب کاربری خود دسترسی خواهید داشت و می‌توانید بدون توقف به یادگیری ادامه دهید.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div >
    )
}

export default ForgotPasswordStepTwo