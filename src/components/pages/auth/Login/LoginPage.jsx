import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    const [isDark, setIsDark] = useState(false)
    const handleDark = () => {
        setIsDark((prev) => !prev)
    }
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark])

    return (
        <div className='bg-[#EAEAEA] min-h-screen flex items-center justify-center'>
            <div className='flex flex-col rounded-[60px] overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg md:flex-row max-w-4xl min-h-[470px] w-full p-3 '>
                <div className=' flex flex-1 flex-col  p-12 gap-4 '>
                    <Link className=' pr-6 bg-[url(./icons/home.png)] bg-no-repeat bg-[length:15px_15px] bg-[right_2px_center] text-[13px] hover:text-blue-400 transition duration-300'>صفحه اصلی</Link>
                    <div className='flex flex-col justify-center items-center gap-5  mt-3  '>
                        <h2 className='text-[19px] font-bold text-[#008C78] mb-2 '>ورود به حساب کاربری</h2>
                        <form className='w-full flex flex-col gap-8' >
                            <div className=''>
                                <input className=' focus:outline-none bg-[url(./icons/user.png)] bg-no-repeat  bg-[length:13px_15px] bg-[right_20px_center]  bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-12 py-2 focus:ring-2 focus:ring-blue-400 placeholder:text-[15px] ' type="email" name='email' id='email' placeholder='ایمیل یا شماره تماس' />
                            </div>
                            <div className=''>
                                <input className='  bg-[url(./icons/lock.png)] bg-no-repeat bg-[length:13px_15px] bg-[right_20px_center] bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-[15px] ' type="email" name='password' id='password' placeholder='رمز عبور' />
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <input className='' type="checkbox" name='forgot' id='forgot' />
                                    <label className=' text-[14px]' htmlFor="forgot"> مرا به خاطر بسپار</label>
                                </div>
                                <Link className='text-[13px] text-[#848484] hover:text-blue-400 transition duration-300'>فراموشی رمز عبور</Link>
                            </div>
                            <button className='w-full bg-[#008C78] text-white text-[14px] rounded-full px-5 py-2 hover : bg-8/10  transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md active:scale-[0.98] '>ارسال کد یکبار مصرف</button>
                        </form>
                        <div className='text-[13px]'>حساب کاربری ندارید؟ <Link className='text-[#008C78] hover:text-blue-500 transition duration-300'>ثبت نام</Link></div>
                    </div>

                </div>
                <div className='flex flex-1 flex-col items-center justify-center p-5 gap-5  bg-[#EEFFFC] dark:bg-gray-800/50 rounded-[60px] relative'>
                    <div onClick={handleDark} className={` cursor-pointer py-3 px-2  w-11 h-5   rounded-full  absolute top-10 left-7 flex  ${isDark ? "bg-yellow-300/40 justify-end " : "bg-blue-900/30  justify-start"} `}>
                        <div className='w-3 h-[90%] rounded-full transition-all duration-500 flex items-center '>
                            <img src={`${isDark ? "./icons/sun.png" : "./icons/moon.png"}  `} alt="" />
                        </div>
                    </div>
                    <img className=' h-60 w-63 ' src="./images/login1.png" alt="" />
                    <div className='flex flex-col justify-center items-center mt-1 gap-3'>
                        <h2 className='text-[#005B77]'>به دنیای یادگیری خوش آمدید!</h2>
                        <p className='text-[12px] text-center'> با ورود به حساب کاربری‌تان، به محتوای آموزشی، دوره‌ها و ابزارهای پیشرفته دسترسی خواهید داشت. اولین قدم برای رشد و پیشرفت همین‌جاست!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage