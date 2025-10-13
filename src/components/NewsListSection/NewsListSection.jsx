import React from 'react'
import newsData from '../common/data/newsListSection/NewsData'

const NewsListSection = () => {
    return (
        <div className=' dark:bg-black dark:text-white bg-[#F3F4F6] flex flex-col justify-center items-center gap-29 max-w-[1440px] px-8 py-16 '>
            <div className='flex flex-col justify-center items-center gap-7'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <h2 className='font-bold text-[32px] dark:text-[#008C78] text-[#008C78] '>اخبار و مقالات</h2>
                    <p className='text-[24px] text-[#353535] '>با تازه‌ترین اخبار و مقالات برنامه‌نویسی به‌روز بمانید</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-7 '>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-7'>
                        {newsData.slice(0, 2).map((card) => (
                            <div
                                key={card.id}
                                className={` ${card.isWide ? "flex-2" : "flex-1"} w-full h-[366px] relative rounded-3xl overflow-hidden [cursor:url(./icons/cursor.png),_pointer] shadow-lg `} >
                                <img src={card.imageUrl} alt="" className='w-full h-full  ' />
                                <div className=' group absolute inset-0 bg-[#00000080] w-full h-full flex flex-col justify-between p-4   '>
                                    <div className=' bg-white/20 bg-[url(./icons/heart.png)] bg-no-repeat bg-[center_center]  p-5 backdrop-blur-md rounded-full w-[24px] h-[20.799999237060547px] '></div>
                                    <div className='flex flex-col gap-2 group-hover:mb-1 transition-all duration-500' >
                                        <div className='text-[#008C78] text-[14px] text-center border-[2px] font-bold border-[#008C78] rounded-full w-[63px] h-[27.450000762939453px] '>آموزشی</div>
                                        <h2 className='text-[16px] font-bold text-[#FFFFFF] '>{card.title}</h2>
                                        <p className=' text-[14px] text-[#FFFFFF] '>{card.caption}</p>
                                        <div className=' flex flex-row justify-between items-center '>
                                            <div className=' text-[14px] text-[#848484] bg-[url(./icons/openEye.png)] bg-no-repeat bg-[right_center] pr-6 ' >{card.view}</div>
                                            <div className=' text-[14px] text-[#F8BC24] bg-[url(./icons/star.png)] bg-no-repeat bg-[left_center] pl-6 ' >{card.star}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    <div className='flex flex-col  md:flex-row justify-between items-center gap-7'>
                        {newsData.slice(2).map((card) => (
                            <div
                                key={card.id}
                                className={` ${card.isWide ? "flex-2" : "flex-1"} w-full h-[366px] relative rounded-3xl overflow-hidden [cursor:url(./icons/cursor.png),_pointer] shadow-lg `} >
                                <img src={card.imageUrl} alt="" className='w-full h-full  ' />
                                <div className=' group absolute inset-0 bg-[#00000080] w-full h-full flex flex-col justify-between p-4   '>
                                    <div className=' bg-white/20 bg-[url(./icons/heart.png)] bg-no-repeat bg-[center_center]  p-5 backdrop-blur-md rounded-full w-[24px] h-[20.799999237060547px] '></div>
                                    <div className='flex flex-col gap-2 group-hover:mb-1 transition-all duration-500' >
                                        <div className='text-[#008C78] text-[14px] text-center border-[2px] font-bold border-[#008C78] rounded-full w-[63px] h-[27.450000762939453px] '>آموزشی</div>
                                        <h2 className='text-[16px] font-bold text-[#FFFFFF] '>{card.title}</h2>
                                        <p className=' text-[14px] text-[#FFFFFF] '>{card.caption}</p>
                                        <div className=' flex flex-row justify-between items-center '>
                                            <div className=' text-[14px] text-[#848484] bg-[url(./icons/openEye.png)] bg-no-repeat bg-[right_center] pr-6 ' >{card.view}</div>
                                            <div className=' text-[14px] text-[#F8BC24] bg-[url(./icons/star.png)] bg-no-repeat bg-[left_center] pl-6 ' >{card.star}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default NewsListSection