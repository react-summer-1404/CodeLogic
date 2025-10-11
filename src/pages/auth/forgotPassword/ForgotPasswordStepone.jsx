
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
            <div className='flex flex-col rounded-[60px] overflow-hidden  bg-[#ffff] dark:bg-black dark:text-white shadow-lg md:flex-row max-w-[1250px] w-full min-h-[739px] p-2 '>
                <div className=' flex flex-1 flex-col  p-17  gap-18 '>
                    <Link className=' pr-9 bg-[url(./icons/home.png)] bg-no-repeat  bg-[right_1px_center] text-[14px] hover:text-blue-400 transition duration-300'>بازگشت</Link>
                    <div className='flex flex-col justify-center items-center gap-3 p-5 '>
                        <div className='flex flex-col justify-center items-center gap-2  '>
                            <h2 className='text-[24px] font-bold text-[#008C78] mb-2 '>فراموشی رمز عبور</h2>
                            <h3 className='text-[16px]'>ایمیل خود را برای تغییر رمز درخواست وارد کنید</h3>
                        </div>
                        <form className='w-full flex flex-col gap-10 mt-7 px-6 ' >
                            <div className=''>
                                <input className=' focus:outline-none bg-[url(./icons/email.png)] bg-no-repeat  bg-[length:14px_13px] bg-[right_20px_center]  bg-[#F3F4F6] dark:bg-gray-500 w-full rounded-full px-12 py-3 focus:ring-2 focus:ring-blue-400 placeholder:text-[15px] ' type="email" name='email' id='email' placeholder='ایمیل خود را وارد کنید' />
                            </div>
                            <button type='submit' onClick={(values) => { console.log(values) }} className='w-full bg-[#008C78] text-white text-[16px] rounded-full px-5 py-3 hover : bg-8/10  transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md active:scale-[0.98] '>ارسال درخواست</button>
                        </form>

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
                            <img className=' max-w-[435px] w-full min-h-[409.592529296875px]  ' src="./images/forgot1.png" alt="" />
                        </div>
                        <div className=' flex flex-col justify-center items-center  gap-4'>
                            <h2 className='text-[#005B77] tracking-wide mt-2 text-[24px] font-extrabold '>فراموشی رمز عبور پایان راه نیست!</h2>
                            <p className='text-[16px] text-center'> با وارد کردن ایمیلتان، لینک تغییر رمز را دریافت می‌کنید و دوباره به دنیای یادگیری برمی‌گردید.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ForgotPasswordStepOne