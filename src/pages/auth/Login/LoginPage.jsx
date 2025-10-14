import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import initialData from '../../../components/common/Form/initialData/initialData'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    password: Yup.string().required('وارد کردن رمز عبور الزامی است').min(8, "رمز عبور باید حداقل شامل 8 کاراکتر باشد"),
    name: Yup.string().required("وارد کردن این بخش الزامی است").min(4, "نام کاربری باید شامل حداقل 4 کاراکتر باشد")
})
const LoginPage = () => {

    const [isDark, setIsDark] = useState(false)
    const handleDark = () => {
        setIsDark((prev) => !prev)
    }

    const [showPassword, setShowPassword] = useState(false)
    const handlePassword = () => {
        setShowPassword((prev) => !prev)
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark])

    return (
        <div className='bg-[#EAEAEA] min-h-screen flex items-center justify-center'>
            <div className='flex flex-col rounded-[60px] overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg md:flex-row max-w-[1250px] w-full min-h-[739px] p-2 '>
                <div className=' flex flex-1 flex-col  p-17  gap-10 '>
                    <Link className=' pr-8 bg-[url(./icons/home.png)] bg-no-repeat bg-[length:22.489788055419922px_20px] bg-[right_1px_center] text-[14px] hover:text-blue-400 transition duration-300'>صفحه اصلی</Link>
                    <div className='flex flex-col justify-center items-center gap-5  '>
                        <h2 className='text-[24px] font-bold text-[#008C78] '>ورود به حساب کاربری</h2>
                        <div className='w-full mt-7 px-6'>
                            <Formik
                                initialValues={initialData}
                                onSubmit={(values) => console.log(values)}
                                validationSchema={validationSchema}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className=' flex flex-col gap-2 ' >
                                            <div className=''>
                                                <Field className={`outline-none bg-[url(./icons/user.png)] bg-no-repeat  bg-[right_20px_center]  bg-[#F3F4F6] dark:bg-gray-500  w-full rounded-full px-13 py-3  placeholder:text-[15px] ${errors.name && touched.name ? "border-[#EF5350] border-1 " : ""}`} type="text" name='name' id='name' placeholder='ایمیل یا شماره تماس' />
                                            </div>
                                            <ErrorMessage name={'name'} component={"span"} className='text-[#EF5350] text-[14px] ' />
                                            <div className=' relative mt-6'>
                                                <Field className={` bg-[url(./icons/lock.png)] bg-no-repeat  bg-[right_20px_center] bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-13 py-3 outline-none placeholder:text-[15px] ${errors.name && touched.name ? "border-[#EF5350] border-1 " : ""} `} type={showPassword ? "text" : "password"} name='password' id='password' placeholder='رمز عبور' />
                                                <img onClick={handlePassword} src={showPassword ? "./icons/eyeClose.png" : "./icons/eyeOpen.png"} alt="" className=' cursor-pointer absolute left-7 top-1/2 -translate-y-1/2 w-[17px] h-[15px] object-cover  ' />
                                            </div>
                                            <ErrorMessage name={'password'} component={"span"} className='text-[#EF5350] text-[14px] ' />
                                            <div className='w-full flex justify-between mt-5 '>
                                                <div className='flex gap-2'>
                                                    <Field className='' type="checkbox" name='forgot' id='forgot' />
                                                    <label className=' text-[14px]' htmlFor="forgot"> مرا به خاطر بسپار</label>
                                                </div>
                                                <Link className='text-[13px] text-[#848484] hover:text-blue-400 transition duration-300'>فراموشی رمز عبور</Link>
                                            </div>
                                            <button type='submit' onClick={(values) => { console.log(values) }} className='w-full bg-[#008C78] text-white text-[16px] rounded-full mt-5 px-5 py-3 hover : bg-8/10  transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md active:scale-[0.98] '>ارسال کد یکبار مصرف</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className='text-[14px]'>حساب کاربری ندارید؟ <Link className='text-[#008C78] hover:text-blue-500 transition duration-300'>ثبت نام</Link></div>
                    </div>

                </div>
                <div className='flex flex-1 flex-col items-center justify-center  p-9  bg-[#EEFFFC] dark:bg-gray-800/50 rounded-[60px] relative'>
                    <div onClick={handleDark} className={` cursor-pointer py-3 px-2  w-12 h-6   rounded-full  absolute top-14 left-7 flex  ${isDark ? "bg-yellow-300/40 justify-end " : "bg-blue-900/30  justify-start"} `}>
                        <div className='w-3 h-[90%] rounded-full transition-all duration-500 flex items-center '>
                            <img src={`${isDark ? "./icons/sun.png" : "./icons/moon.png"}  `} alt="" />
                        </div>
                    </div>
                    <div className=' mt-5 flex flex-col  items-center justify-center gap-6'>
                        <div className=' flex flex-col justify-center items-center  '>
                            <img className=' max-w-[435px] w-full min-h-[409.592529296875px]  ' src="./images/login1.png" alt="" />
                        </div>
                        <div className=' flex flex-col justify-center items-center  gap-4'>
                            <h2 className='text-[#005B77] tracking-wide mt-2 text-[24px] font-extrabold '>به دنیای یادگیری خوش آمدید!</h2>
                            <p className='text-[16px] text-center'> با ورود به حساب کاربری‌تان، به محتوای آموزشی، دوره‌ها و ابزارهای پیشرفته دسترسی خواهید داشت. اولین قدم برای رشد و پیشرفت همین‌جاست!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage