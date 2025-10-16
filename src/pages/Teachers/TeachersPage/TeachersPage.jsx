import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SliderTeacher from '../../../components/Sliderteachers/SliderTeacher/SliderTeacher'
import TeachersData from '../../../components/common/data/Teachers/TeachersData'

const TeachersPage = () => {

    const [curruntPage, setCurruntPage] = useState(1)
    const TeachersPerPage = 16
    const startIndex = (curruntPage - 1) * TeachersPerPage
    const endIndex = startIndex + TeachersPerPage

    const cuuruntTeachers = TeachersData.slice(startIndex, endIndex)
    const totalPage = Math.ceil(TeachersData.length / TeachersPerPage)

    const handleBack = () => {
        setCurruntPage((prev) => prev - 1)
    }
    const handleNext = () => {
        setCurruntPage((prev) => prev + 1)
    }

    return (
        <div className='flex flex-col p-[16px] '>
            <div className='flex flex-col items-center justify-center gap-6'>
                <div className='flex gap-8 text-[#008C78] text-[14px] '>
                    <Link className='hover:text-blue-500 transition duration-300'>صفحه اصلی</Link>
                    <span>&gt;</span>
                    <Link className='hover:text-blue-500 transition duration-300'>اساتید</Link>
                </div>
                <h2 className='text-[#1E1E1E] text-[32px] font-bold dark:text-white '>اساتید</h2>
            </div>
            <div className='flex flex-col items-center gap-11'>
                <div className='mt-12 flex bg-[#ffff] h-[72px] w-full shadow-md  rounded-[15px] items-center justify-between px-5 py-3 '>
                    <div className='flex gap-4 w-[60%] h-full items-center justify-between '>
                        <div className=' w-[80%] h-full   '>
                            <motion.input
                                whileFocus={{
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                                }}
                                transition={{ duration: 0.3 }}
                                className=' px-3 w-full h-full outline-none border-[#EAEAEA] border-[1px] rounded-2xl ' placeholder='جستجو ....' type="text" />
                        </div>
                        <motion.button
                            whileHover={{
                                scale: 1.1, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                            }}
                            transition={{ duration: 0.3 }}
                            whileTap={{ scale: 0.98 }}
                            className='border-[#EAEAEA] border-[1px]  w-[25%] h-full rounded-2xl '>تعداد نمایش</motion.button>
                    </div>
                    <motion.button
                        whileHover={{
                            scale: 1.1, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                        }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        whileTap={{ scale: 0.98 }}
                        className='text-center text-[14px] text-[#ffff] h-full w-[11%] rounded-2xl bg-[#008C78] '>جستجو</motion.button>
                </div>
                <div className='flex gap-5  md:flex-wrap w-full ' style={{ direction: "ltr" }}>
                    {cuuruntTeachers.map((item, index) => (<SliderTeacher item={item} key={index} />))}

                </div>
                <div className='flex items-center justify-center gap-3' style={{ direction: "ltr" }} >
                    <button disabled={curruntPage === 1} onClick={handleBack} className='cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3 bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"} bg-[url(./icons/left.png)] bg-[center_center] bg-no-repeat '></button>
                    <div className='flex items-center justify-center gap-3'>
                        {Array.from({ length: totalPage }, (_, i) => (
                            <button className={` transition-all duration-300 cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3 ${curruntPage === i + 1 ? "bg-[#008C78] text-[#ffff]" : " bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"} `} > {curruntPage + i}</button>
                        ))}
                    </div>
                    <button disabled={curruntPage === totalPage} onClick={handleNext} className='cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3 bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"} bg-[url(./icons/right.png)] bg-[center_center] bg-no-repeat '></button>
                </div>
            </div>

        </div >
    )
}

export default TeachersPage