
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
            <div className='flex flex-col rounded-[60px] overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg md:flex-row max-w-[1250px] w-full min-h-screen p-2 '>
                <div className=' flex flex-1 flex-col  p-18  gap-10 '>
                    <Link className=' pr-6 bg-[url(./icons/back.png)] bg-no-repeat bg-[length:15px_15px] bg-[right_2px_center] text-[13px] hover:text-blue-400 transition duration-300'>بازگشت</Link>
                    <div className='flex flex-col justify-center items-center gap-3 p-7 '>
                        <div className='flex flex-col justify-center gap-1 items-center'>
                            <h2 className='text-[19px] font-bold text-[#008C78] mb-2 '>فراموشی رمز عبور</h2>
                            <h3 className='text-[13px]'>ایمیل خود را برای تغییر رمز درخواست وارد کنید</h3>
                        </div>
                        <form className='w-full flex flex-col gap-10 mt-8  ' >
                            <div className=''>
                                <input className=' focus:outline-none bg-[url(./icons/email.png)] bg-no-repeat  bg-[length:14px_13px] bg-[right_20px_center]  bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-12 py-3 focus:ring-2 focus:ring-blue-400 placeholder:text-[15px] ' type="email" name='email' id='email' placeholder='ایمیل خود را وارد کنید' />
                            </div>
                            <button type='submit' onClick={(values) => { console.log(values) }} className='w-full bg-[#008C78] text-white text-[14px] rounded-full px-5 py-3 hover : bg-8/10  transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md active:scale-[0.98] '>ارسال کد یکبار مصرف</button>
                        </form>

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
                            <img className=' w-95 h-95  ' src="./images/forgot1.png" alt="" />
                        </div>
                        <div className=' mt-3 flex flex-col justify-center items-center  gap-3'>
                            <h2 className='text-[#005B77] tracking-wide mt-2 font-bold '>فراموشی رمز عبور پایان راه نیست!</h2>
                            <p className='text-[12px] text-center'> با وارد کردن ایمیلتان، لینک تغییر رمز را دریافت می‌کنید و دوباره به دنیای یادگیری برمی‌گردید.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ForgotPasswordStepOne