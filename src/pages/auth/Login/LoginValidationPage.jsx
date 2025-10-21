import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import initialData from '../../../components/common/Form/initialData/initialData'
import { motion } from 'framer-motion'



const validationSchema = Yup.object({
    code: Yup.array().of(Yup.string().matches(/^[0-9]$/, "فقط عدد مجاز است").required("نمتواند خالی باشد"))
})
const initialValues = { code: ['', '', '', '', ''] }

const LoginValidationPage = () => {

    const inputsRef = useRef([])

    const handleChange = (e, index, values, setFieldValue) => {
        const value = e.target.value.replace(/\D/, "")
        const newCode = [...values.code]
        newCode[index] = value
        setFieldValue("code", newCode)
        if (value && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus()
        }
    }
    const handleKeyDown = (e, index, values, setFieldValue) => {
        if (e.key === 'Backspace') {
            const newCode = [...values.code]
            newCode[index] = ""
            setFieldValue("code", newCode)
        }
    }
    const handleSubmit = (values) => {
        const finalCode = values.code.join("")
        console.log(finalCode)
    }

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
                className='flex flex-col  overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg lg:flex-row w-[90%] sm:w-[95%] md:w-[90%] h-[72.17%] lg:h-[72.17%] rounded-[60px] p-2 '>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", type: "spring", stiffness: 300, delay: 0.5 }}
                    className=' flex flex-1 flex-col  p-17  gap-10 '>
                    <Link to={"/login"} className=' pr-8 bg-[url(./icons/back.png)] bg-no-repeat  bg-[right_1px_center] text-[14px] hover:text-blue-400 transition duration-300'>بازگشت</Link>
                    <div className='flex flex-col justify-center items-center gap-3 p-5 '>
                        <div className='flex flex-col justify-center items-center gap-2  '>
                            <h2 className='text-[24px] font-bold text-[#008C78] mb-2 '>ورود به حساب کاربری</h2>
                            <h3 className='text-[13px]'>رمز یکبار مصرف ارسال شده را وارد کنید</h3>
                        </div>
                        <div

                            className='w-full mt-7 px-7'>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values) => handleSubmit(values)}
                                validationSchema={validationSchema}
                            >
                                {({ setFieldValue, touched, values }) => (
                                    <Form>
                                        <div className=' flex flex-col gap-4 px-3 ' >
                                            <div className='flex justify-between  '>
                                                {values.code.map((digit, index) => (
                                                    <div key={index} className=' flex flex-col gap-5'>
                                                        <Field
                                                            innerRef={(el) => (inputsRef.current[index] = el)}
                                                            name={`code[${index}]`}
                                                            type="text"
                                                            maxLength={1}
                                                            inputMode="numeric"
                                                            value={digit}
                                                            onChange={(e) =>
                                                                handleChange(e, index, values, setFieldValue)
                                                            }
                                                            onKeyDown={(e) => handleKeyDown(e, index, values, setFieldValue)}

                                                            className={`w-12 h-12 text-center rounded-xl text-lg bg-[#F3F4F6] shadow-md outline-none transition-colors duration-200 ${digit ? "border-2 border-[#008C78]"
                                                                : touched.code?.[index] ? "border-2 border-red-500"
                                                                    : "border-2 border-transparent focus:border-[#008C78]"
                                                                } `}
                                                        />
                                                    </div>
                                                )
                                                )}
                                            </div>
                                            {touched.code && values.code.some((v, i) => touched.code[i] && !v) && (
                                                <div className=' text-red-500 text-sm mt-1 font-semibold'>پر کردن فیلد الزامی است</div>
                                            )}

                                            <motion.button
                                                whileHover={{
                                                    scale: 1.1, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                                                }}
                                                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                                                whileTap={{ scale: 0.98 }}
                                                type='submit'
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