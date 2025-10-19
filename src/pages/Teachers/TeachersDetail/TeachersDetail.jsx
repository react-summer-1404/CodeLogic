
import { Link, useParams } from 'react-router-dom'
import dataTeachers from '../../../components/common/data/Teachers/TeachersData'
import TeacherCard from './TeacherCard'
import React, { useEffect, useRef, useState } from 'react'
import teachersDetail from '../../../components/common/data/Teachers/teachersDetail'
import { motion, AnimatePresence } from 'framer-motion'
import CourseCardView1 from '../../../components/common/CourseCardView1/CourseCardView1'
import SliderButtons from '../../../components/common/sliders/buttons/sliderButtons'
import apiClient from '../../../core/interceptor/interceptor'


const TeachersDetail = () => {
    const { id } = useParams()
    const teacherId = parseInt(id)
    const teacher = dataTeachers.find((t) => t.id === teacherId)

    const [detailData, setDetailData] = useState([])
    const [isLoading, setIsLoading] = useState()
    const [isError, setIsError] = useState()
    const [TempSearch, setTempSearch] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [curruntPage, setCurruntPage] = useState(1)
    const [TempCount, setTempCount] = useState(9)
    const [DetailPerPage, setDetailPerPage] = useState(9)
    const [DropDownPage, setDropDownPage] = useState(false)
    const [DropDown, setDropDown] = useState(false)
    const [searchActivated, setSearchActivated] = useState(true)
    const startIndex = (curruntPage - 1) * DetailPerPage
    const endIndex = startIndex + DetailPerPage
    const filteredDetail = teachersDetail.filter((Detail) => Detail.title.toLowerCase().includes(searchTerm.trim().toLowerCase()))
    const cuuruntDetail = filteredDetail.slice(startIndex, endIndex)
    const totalPage = Math.max(1, Math.ceil(filteredDetail.length / DetailPerPage))
    const showOptions = [9, 22, 45]

    const handleSelectCount = (num) => {
        setTempCount(num)
        setCurruntPage(1)
        setDropDownPage(false)
        setSearchActivated(false)
    }

    const applySearch = () => {
        setCurruntPage(1)
        setSearchTerm(TempSearch)
        setDetailPerPage(TempCount)
        setSearchActivated(true)
    }

    useEffect(() => {
        if (curruntPage > totalPage) {
            setCurruntPage(1)
        }
    }, [totalPage, curruntPage])

    const handleBack = () => {
        setCurruntPage((prev) => prev - 1)
    }
    const handleNext = () => {
        setCurruntPage((prev) => prev + 1)
    }
    const fadeInUp = (delay) => ({
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay },
        },
    });
    const fadeOutUp = (delay) => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay },
        },
    });

    const sliderRef = useRef(null)

    const fetchDetail = async () => {
        try {
            setIsLoading(true)
            const response = await apiClient.get(`/Home/GetTeacherDetails?TeacherId=${teacherId}`)
            const data = response.data
            console.log(response)
            setDetailData(data)

        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchDetail()
    }, [])

    return (
        <div>
            {isLoading && <img className='mx-auto p-4 ' src="/images/loading.gif" alt="" />}
            {!isLoading && (
                <motion.div
                    variants={fadeInUp(0.35)}
                    initial="hidden"
                    animate="visible"
                    className='flex flex-col p-[16px] items-center justify-center gap-8 dark:bg-[#1E1E1E]'>
                    <div

                        className='flex flex-col items-center justify-center gap-6'>
                        <div className='flex gap-4 text-[#008C78] text-[14px] '>
                            <Link to={"/"} className='hover:text-blue-500 transition duration-300'>صفحه اصلی</Link>
                            <span>&gt;</span>
                            <Link to={'/Teachers'} className='hover:text-blue-500 transition duration-300'>اساتید</Link>
                            <span>&gt;</span>
                            <Link className='hover:text-blue-500 transition duration-300'>{teacher.fullName}</Link>


                        </div>
                        <h2 className='text-[#1E1E1E] text-[32px] font-bold dark:text-white '>{teacher.fullName}</h2>
                    </div>
                    <div className=' flex flex-col md:flex-row md:flex-nowrap gap-10 w-full  justify-between pt-4 pb-20 '>
                        <div className='w-[35%] md:w-[23%] mx-auto md:mx-0 '>
                            <TeacherCard item={teacher} />
                        </div>
                        <div className='w-[100%] md:w-[80%] flex flex-col justify-center mx-auto md:mx-0'>
                            <div className=' flex bg-[#ffff] h-[72px] w-full shadow-md  rounded-[15px] items-center justify-between px-5 py-3 '>
                                <div className='flex gap-4 w-[60%] h-full items-center justify-between '>
                                    <div className=' w-[80%] h-full   '>
                                        <motion.input
                                            whileFocus={{
                                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className=' px-3 w-full h-full outline-none border-[#EAEAEA] border-[1px] rounded-2xl '
                                            placeholder='جستجو ....'
                                            type="text"
                                            onChange={(e) => {
                                                setTempSearch(e.target.value)
                                            }}
                                            onKeyDown={(e) => { e.key === "Enter" && applySearch() }}
                                            value={TempSearch}
                                        />
                                    </div>
                                    <div className=' relative w-[26%] h-full'>
                                        <motion.button
                                            whileHover={{
                                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 15px 0px"
                                            }}
                                            transition={{ duration: 0.3 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setDropDownPage((prev) => !prev)}
                                            className={`  border-[#EAEAEA] border-[1px]  w-full h-full pl-5  rounded-2xl  ${!DropDownPage && "md:bg-[url(./icons/buttom.png)] md:bg-no-repeat md:bg-[left_12px_center]"} `}>
                                            {!searchActivated ? `${TempCount}` : TempCount > 32 && searchActivated ? "نمایش کمتر" : "نمایش بیشتر"} </motion.button>
                                        {DropDownPage && (
                                            <AnimatePresence>
                                                <motion.ul
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.2 }}

                                                    className='absolute top-[110%] left-0 w-full bg-white border border-[#EAEAEA] rounded-2xl shadow-lg z-20 overflow-hidden '>
                                                    {showOptions.map((num) => (
                                                        <li
                                                            key={num}
                                                            onClick={() => handleSelectCount(num)}
                                                            className={`py-2 cursor-pointer text-center hover:bg-[#008C78] hover:text-white ${TempCount === num ? "hover:bg-gray-300 " : ""} `}
                                                        >
                                                            {num}
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            </AnimatePresence>
                                        )}

                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                                    }}
                                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={applySearch}
                                    className='text-center text-[14px] text-[#ffff] h-full w-[11%] rounded-2xl bg-[#008C78] '>جستجو</motion.button>
                            </div>

                            <SliderButtons sliderRef={sliderRef} />

                            <div ref={sliderRef} className='w-full flex flex-nowrap justify-items-start md:flex-wrap md:justify-between overflow-y-hidden overflow-x-auto scroll-smooth pb-4 gap-4 ' style={{ direction: "ltr" }}>
                                {cuuruntDetail.map((item, i) => (
                                    <CourseCardView1 key={item.id} item={item} />
                                ))}
                            </div>
                            <div className='  flex items-center justify-center gap-3' style={{ direction: "ltr" }} >
                                <button disabled={curruntPage === 1} onClick={handleBack} className='cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3 bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"} bg-[url(./icons/left.png)] bg-[center_center] bg-no-repeat '></button>
                                <div className='flex items-center justify-center gap-3'>
                                    {Array.from({ length: totalPage }, (_, i) => (
                                        <button key={i} onClick={() => setCurruntPage(i + 1)} className={` transition-all duration-300 cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3 ${curruntPage === i + 1 ? "bg-[#008C78] text-[#ffff]" : " bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"} `} >{i + 1}</button>
                                    ))}
                                </div>
                                <button disabled={curruntPage === totalPage} onClick={handleNext} className='cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3 bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"} bg-[url(./icons/right.png)] bg-[center_center] bg-no-repeat '></button>
                            </div>
                        </div>
                    </div>

                </motion.div>
            )}
        </div>
    )
}

export default TeachersDetail