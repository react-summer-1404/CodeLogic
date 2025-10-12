import React from 'react'

const NewsListSection = () => {
    return (
        <div className=' dark:bg-black dark:text-white bg-[#F3F4F6] flex flex-col justify-center items-center gap-29 max-w-[1440px] px-8 py-16 '>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <h2 className='font-bold text-[32px] dark:text-[#008C78] text-[#008C78] '>اخبار و مقالات</h2>
                    <p className='text-[24px] text-[#353535] '>با تازه‌ترین اخبار و مقالات برنامه‌نویسی به‌روز بمانید</p>
                </div>
                <div className='flex flex-col justify-center items-center  md:flex-row md:flex-wrap gap-7  '>
                    <div className='  w-full md:w-[36%] h-[366px] relative rounded-3xl overflow-hidden [cursor:url(./icons/cursor.png),_pointer] shadow-lg '>
                        <img src="./images/blogs/2.png" alt="" className='w-full h-full  ' />
                        <div className=' group absolute inset-0 bg-[#00000080] w-full h-full flex flex-col justify-between p-4   '>
                            <div className=' bg-white/20 bg-[url(./icons/heart.png)] bg-no-repeat bg-[center_center]  p-5 backdrop-blur-md rounded-full w-[24px] h-[20.799999237060547px] '></div>
                            <div className='flex flex-col gap-2 group-hover:mb-1 transition-all duration-500' >
                                <div className='text-[#008C78] text-[14px] text-center border-[2px] font-bold border-[#008C78] rounded-full w-[63px] h-[27.450000762939453px] '>آموزشی</div>
                                <h2 className='text-[16px] font-bold text-[#FFFFFF] '>برنامه نویسی چیست؟‌ – همه چیز هایی که باید بدانید + کاربردها</h2>
                                <p className=' text-[14px] text-[#FFFFFF] '>محبوبیت برنامه نویسی در سال‌های اخیر به قدری افزایش یافته است که تقریباً اکثر افراد در مورد آن چیزهایی شنیده‌اند. با توجه به درآمد و حقوق بالای برنامه نویسی و جذابیت‌های متعدد آن...</p>
                                <div className=' flex flex-row justify-between items-center '>
                                    <div className=' text-[14px] text-[#848484] bg-[url(./icons/openEye.png)] bg-no-repeat bg-[right_center] pr-6 ' >22</div>
                                    <div className=' text-[14px] text-[#F8BC24] bg-[url(./icons/star.png)] bg-no-repeat bg-[left_center] pl-6 ' >3.3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  w-full md:w-[57%] h-[366px] relative rounded-3xl overflow-hidden [cursor:url(./icons/cursor.png),_pointer] shadow-lg '>
                        <img src="./images/blogs/1.png" alt="" className='w-full h-full  ' />
                        <div className=' group absolute inset-0 bg-[#00000080] w-full h-full flex flex-col justify-between p-4   '>
                            <div className=' bg-white/20 bg-[url(./icons/heart.png)] bg-no-repeat bg-[center_center]  p-5 backdrop-blur-md rounded-full w-[24px] h-[20.799999237060547px] '></div>
                            <div className='flex flex-col gap-2 group-hover:mb-1 transition-all duration-500' >
                                <div className='text-[#008C78] text-[14px] text-center border-[2px] font-bold border-[#008C78] rounded-full w-[63px] h-[27.450000762939453px] '>آموزشی</div>
                                <h2 className='text-[16px] font-bold text-[#FFFFFF] '>اسکریپت چیست و چه کاربردی در برنامه‌نویسی دارد؟</h2>
                                <p className=' text-[14px] text-[#FFFFFF] '>برنامه‌های ساده و کوتاهی که برای خودکارسازی انجام برخی از وظایف نوشته  می‌شود در دنیای برنامه نویسی اسکریپت نام دارد. برخلاف برنامه‌های بزرگ و  پیچیده، با این ابزار اغلب به‌سرعت نوشته و اجرا می‌شوند و نیازی به  کامپایل ندارند. اسکریپت‌ها در زمینه‌های مختلفی مانند وب، سیستم‌عامل‌ها،  پردازش داده‌ها یا اتوماسیون وظایف کاربردی هستند.</p>
                                <div className=' flex flex-row justify-between items-center '>
                                    <div className=' text-[14px] text-[#848484] bg-[url(./icons/openEye.png)] bg-no-repeat bg-[right_center] pr-6 ' >22</div>
                                    <div className=' text-[14px] text-[#F8BC24] bg-[url(./icons/star.png)] bg-no-repeat bg-[left_center] pl-6 ' >3.3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  w-full md:w-[30%] h-[366px] relative rounded-3xl overflow-hidden [cursor:url(./icons/cursor.png),_pointer] shadow-lg '>
                        <img src="./images/blogs/5.png" alt="" className='w-full h-full  ' />
                        <div className=' group absolute inset-0 bg-[#00000080] w-full h-full flex flex-col justify-between p-4   '>
                            <div className=' bg-white/20 bg-[url(./icons/heart.png)] bg-no-repeat bg-[center_center]  p-5 backdrop-blur-md rounded-full w-[24px] h-[20.799999237060547px] '></div>
                            <div className='flex flex-col gap-2 group-hover:mb-1 transition-all duration-500' >
                                <div className='text-[#008C78] text-[14px] text-center border-[2px] font-bold border-[#008C78] rounded-full w-[63px] h-[27.450000762939453px] '>آموزشی</div>
                                <h2 className='text-[16px] font-bold text-[#FFFFFF] '>10 افزونه برتر VSCode ضروری برای Pythonistas</h2>
                                <p className=' text-[14px] text-[#FFFFFF] '>برای توسعه دهندگان پایتون، دانشمندان داده و تحلیلگران، با استفاده از  VSCode، این مجموعه برخی از افزونه ها را برای افزایش بهره وری و کارایی  برنامه نویسی شما در پایتون و نیازهای برنامه نویسی ...</p>
                                <div className=' flex flex-row justify-between items-center '>
                                    <div className=' text-[14px] text-[#848484] bg-[url(./icons/openEye.png)] bg-no-repeat bg-[right_center] pr-6 ' >22</div>
                                    <div className=' text-[14px] text-[#F8BC24] bg-[url(./icons/star.png)] bg-no-repeat bg-[left_center] pl-6 ' >3.3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  w-full md:w-[30%] h-[366px] relative rounded-3xl overflow-hidden [cursor:url(./icons/cursor.png),_pointer] shadow-lg '>
                        <img src="./images/blogs/3.png" alt="" className='w-full h-full  ' />
                        <div className=' group absolute inset-0 bg-[#00000080] w-full h-full flex flex-col justify-between p-4   '>
                            <div className=' bg-white/20 bg-[url(./icons/heart.png)] bg-no-repeat bg-[center_center]  p-5 backdrop-blur-md rounded-full w-[24px] h-[20.799999237060547px] '></div>
                            <div className='flex flex-col gap-2 group-hover:mb-1 transition-all duration-500' >
                                <div className='text-[#008C78] text-[14px] text-center border-[2px] font-bold border-[#008C78] rounded-full w-[63px] h-[27.450000762939453px] '>آموزشی</div>
                                <h2 className='text-[16px] font-bold text-[#FFFFFF] '>HTML چیست؟ از سیر تا پیاز HTML</h2>
                                <p className=' text-[14px] text-[#FFFFFF] '>در طول روز ما از سایت های زیادی بازدید می کنیم و هرکدام به شکل خاصی برای  ما جالب و جذاب هستند. ممکن است که شما تا به حال یه این فکر افتاده باشید  که که این وب سایت...</p>
                                <div className=' flex flex-row justify-between items-center '>
                                    <div className=' text-[14px] text-[#848484] bg-[url(./icons/openEye.png)] bg-no-repeat bg-[right_center] pr-6 ' >22</div>
                                    <div className=' text-[14px] text-[#F8BC24] bg-[url(./icons/star.png)] bg-no-repeat bg-[left_center] pl-6 ' >3.3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  w-full md:w-[30%] h-[366px] relative rounded-3xl overflow-hidden [cursor:url(./icons/cursor.png),_pointer] shadow-lg '>
                        <img src="./images/blogs/4.png" alt="" className='w-full h-full  ' />
                        <div className=' group absolute inset-0 bg-[#00000080] w-full h-full flex flex-col justify-between p-4   '>
                            <div className=' bg-white/20 bg-[url(./icons/heart.png)] bg-no-repeat bg-[center_center]  p-5 backdrop-blur-md rounded-full w-[24px] h-[20.799999237060547px] '></div>
                            <div className='flex flex-col gap-2 group-hover:mb-1 transition-all duration-500' >
                                <div className='text-[#008C78] text-[14px] text-center border-[2px] font-bold border-[#008C78] rounded-full w-[63px] h-[27.450000762939453px] '>آموزشی</div>
                                <h2 className='text-[16px] font-bold text-[#FFFFFF] '>پایتون + ماینکرفت = یادگیری برنامه‌ نویسی با بازی!</h2>
                                <p className=' text-[14px] text-[#FFFFFF] '>پایتون یکی از محبوب‌ ترین زبان‌های برنامه‌ نویسی دنیاست؛ ساده، قابل فهم و در عین حال قدرتمند! ماینکرفت نیز یکی از پرفروش‌ ترین و خلاقانه‌‌ترین بازی‌های تاریخ است.</p>
                                <div className=' flex flex-row justify-between items-center '>
                                    <div className=' text-[14px] text-[#848484] bg-[url(./icons/openEye.png)] bg-no-repeat bg-[right_center] pr-6 ' >22</div>
                                    <div className=' text-[14px] text-[#F8BC24] bg-[url(./icons/star.png)] bg-no-repeat bg-[left_center] pl-6 ' >3.3</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default NewsListSection