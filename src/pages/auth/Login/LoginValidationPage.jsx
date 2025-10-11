import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LoginValidationPage = () => {

    const [isDark, setIsDark] = useState(false)
    const handleDark = () => {
        setIsDark((prev) => !prev)
    }
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark])

    const [Otp, setOtp] = useState(['', '', '', '', ''])

    return (
        <div className='bg-[#EAEAEA] min-h-screen flex items-center justify-center'>
            <div className='flex flex-col rounded-[60px] overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg md:flex-row max-w-[1250px] w-full min-h-screen p-2 '>
                <div className=' flex flex-1 flex-col  p-18  gap-10 '>
                    <Link className=' pr-6 bg-[url(./icons/back.png)] bg-no-repeat bg-[length:15px_15px] bg-[right_2px_center] text-[13px] hover:text-blue-400 transition duration-300'>بازگشت</Link>
                    <div className='flex flex-col justify-center items-center gap-3 p-5 '>
                        <div className='flex flex-col justify-center gap-1 items-center'>
                            <h2 className='text-[19px] font-bold text-[#008C78] mb-2 '>ورود به حساب کاربری</h2>
                            <h3 className='text-[13px]'>رمز یکبار مصرف ارسال شده را وارد کنید</h3>
                        </div>
                        <form className='w-full flex flex-col gap-16 mt-8 ' >
                            <div className='flex justify-between px-8  '>
                                {Otp.map((number, i) => (
                                    <input
                                        key={i}
                                        type='text'
                                        placeholder=''
                                        maxLength="1"
                                        className={`w-12 h-12 text-center rounded-xl text-lg bg-[#F3F4F6] shadow-md`}
                                    />
                                ))}
                            </div>
                            <button className='w-full bg-[#008C78] text-white text-[14px] rounded-full px-5 py-3 hover : bg-8/10  transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md active:scale-[0.98] '>ارسال کد یکبار مصرف</button>
                        </form>
                        <p className='text-[14px]'>01:23</p>

                    </div>

                </div>
                <div className='flex flex-1 flex-col items-center justify-center  p-9  bg-[#EEFFFC] dark:bg-gray-800/50 rounded-[60px] relative'>
                    <div onClick={handleDark} className={` cursor-pointer py-3 px-2  w-12 h-6   rounded-full  absolute top-14 left-7 flex  ${isDark ? "bg-yellow-300/40 justify-end " : "bg-blue-900/30  justify-start"} `}>
                        <div className='w-3 h-[90%] rounded-full transition-all duration-500 flex items-center '>
                            <img src={`${isDark ? "./icons/sun.png" : "./icons/moon.png"}  `} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col  items-center mt-6 justify-center'>
                        <div className=' flex flex-col justify-center items-center mt-5'>
                            <img className=' w-95 h-95  ' src="./images/login2.png" alt="" />
                        </div>
                        <div className=' mt-3 flex flex-col justify-center items-center  gap-3'>
                            <h2 className='text-[#005B77] tracking-wide font-bold '>تنها یک قدم تا دنیای یادگیری!</h2>
                            <p className='text-[12px] text-center'> فرصت رشد، پیشرفت و ساختن آینده‌ای بهتر همین‌جاست — همراه با ما، یک قدم جلوتر باشید!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginValidationPage