import React from 'react'

const TitleNewsSection = () => {
    
    return (
        <div className='dark:text-white bg-[#F3F4F6] flex flex-col justify-center items-center gap-29 max-w-[1440px] px-8 py-16'>
            <div className='flex flex-col gap-10 md:gap-5 md:flex-row  '>
                <div className='flex-1 flex flex-col gap-4  text-[36px] pl-10 '>
                    <h2 className='font-bold'>تجربه‌ات رو آموزش بده، تأثیر بذار و با ما <span className=' dark:text-[#008C78] text-[#008C78] cursor-pointer hover:text-blue-500 transition duration-500'>مسیر حرفه ای تازه ای</span> رو شروع کن.</h2>
                    <p className='text-[16px] text-[#848484]'>اگه برنامه‌نویسی بلدی و دوست داری دانشت رو به دیگران منتقل کنی، اینجا جاییه که می‌تونی هم آموزش بدی، هم تاثیرگذار باشی و هم درآمد داشته باشی. به جمع مدرسین ما بپیوند و بخشی از آینده‌ی برنامه‌نویسان تازه‌کار باش.</p>
                    <button className=' mt-4 pl-10 max-w-[253px] w-full min-h-[46px] rounded-full bg-[#005B77] text-[16px] font-bold text-[#FFFFFF] bg-[url(./icons/next.png)] bg-no-repeat bg-[left_35px_center] cursor-pointer hover:bg-8/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-md active:scale-[0.98] ' >به جمع اساتید بپیوندید</button>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                    <img src="./images/news.png" alt="" className='max-w-[665px] w-full min-h-[413.1876220703125px]'/>
                </div>
            </div>
        </div>
    )
}

export default TitleNewsSection