import { Link, useParams } from 'react-router-dom';
import TeacherCard from '../../../components/common/TeachersDetail/TeacherCard';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SliderButtons from '../../../components/common/sliders/buttons/sliderButtons';
import DetailCard from '../../../components/common/TeachersDetail/DetailCard';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import GetAllCourses from '../../../core/services/api/Get/GetAllCourses';
import loading from '../../../assets/Images/A/loading.gif';
import leftIcon from '../../../assets/Icons/A/left.png';
import rightIcon from '../../../assets/Icons/A/right.png';
import searchIcon from '../../../assets/Icons/A/search.png';
import { getDetail } from '../../../core/services/api/Get/GetTeachersDetail';
import GetCoursesPaginate from '../../../core/services/api/Get/GetCoursesByPaginatio';

const TeachersDetail = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'fa';
    const { id } = useParams();
    const teacherId = parseInt(id);
    //// get teacherDetail by id ////
    const { data: teacher = {}, isPending: isTeacherLoading } = useQuery({
        queryKey: ['GETTEACHERDETAIL', teacherId],
        queryFn: () => getDetail(teacherId),
    });

    const [tempSearch, setTempSearch] = useState('');
    const [tempCount, setTempCount] = useState();

    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage, setCoursesPerPage] = useState(12);
    //// get courses ////
    const { data: coursesData = {}, isPending: isCoursesLoading } = useQuery({
        queryKey: ['COURSESDATAPAGINATE', teacherId, currentPage, coursesPerPage, query],
        queryFn: () => GetCoursesPaginate({ currentPage, coursesPerPage, query, teacherId }),
    });
    //// pagination ////
    const courses = coursesData?.courseFilterDtos || [];
    const totalPage = coursesData?.totalCount;
    const goToPage = (page) => {
        if (page < 1 || page >= totalPage) return;
        setCurrentPage(p);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const applyFilter = () => {
        setCurrentPage(1);
        setQuery(tempSearch);
        setCoursesPerPage(tempCount);
    };

    const fadeInUp = (delay) => ({
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', delay },
        },
    });
    const fadeOutUp = (delay) => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', delay },
        },
    });

    const sliderRef = useRef(null);

    return (
        <div>
            {(isTeacherLoading || isCoursesLoading) && (
                <img className="mx-auto p-4 " src={loading} alt="" />
            )}
            {!isTeacherLoading && !isCoursesLoading && (
                <motion.div
                    variants={fadeInUp(0.35)}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col p-[16px] items-center justify-center gap-8  dark:bg-[#1E1E1E]"
                >
                    <div className="flex flex-col items-center justify-center gap-6">
                        <div className="flex gap-4 text-[#008C78] text-[14px] ">
                            <Link to={'/'} className="hover:text-blue-500 transition duration-300">
                                {t('teachersPage.titles.HomePage')}
                            </Link>
                            <span>&gt;</span>
                            <Link
                                to={'/Teachers'}
                                className="hover:text-blue-500 transition duration-300"
                            >
                                {t('teachersPage.titles.Teachers')}
                            </Link>
                            <span>&gt;</span>
                            <Link className="hover:text-blue-500 transition duration-300">
                                {teacher.fullName}
                            </Link>
                        </div>
                        <h2 className="text-[#1E1E1E] text-[32px] font-bold dark:text-white ">
                            {teacher.fullName}
                        </h2>
                    </div>
                    <div className=" flex flex-col md:flex-row md:flex-nowrap gap-10 w-full  justify-between pt-4 pb-20 ">
                        <div className="w-[35%] md:w-[23%] mx-auto md:mx-0 ">
                            <TeacherCard item={teacher} />
                        </div>
                        <div className="w-[100%] md:w-[80%] flex flex-col justify-center mx-auto md:mx-0">
                            <div
                                className=" flex dark:text-[#EEEEEE] dark:border dark:border-[#EAEAEA]   dark:bg-[#1E1E1E]
                             bg-[#ffff] h-[72px] w-full shadow-md  rounded-[15px] items-center justify-between px-5 py-3 "
                            >
                                {/* ///// filtering //// */}
                                <div className="flex gap-4 w-[60%] h-full items-center justify-between ">
                                    <div className=" w-[78%] h-full   ">
                                        <motion.input
                                            whileFocus={{
                                                boxShadow:
                                                    'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={` px-3 w-full h-full dark:placeholder:text-[#EEEE] outline-none border-[#EAEAEA] border-[1px]
                                             ${
                                                 isRTL
                                                     ? 'bg-[left_15px_center]'
                                                     : 'bg-[right_15px_center]'
                                             }  bg-no-repeat rounded-2xl `}
                                            style={{ backgroundImage: `url(${searchIcon})` }}
                                            placeholder={t('teachersPage.filters.Search')}
                                            type="text"
                                            onChange={(e) => {
                                                setTempSearch(e.target.value);
                                            }}
                                            onKeyDown={(e) => {
                                                e.key === 'Enter' && applyFilter();
                                            }}
                                            value={tempSearch}
                                        />
                                    </div>
                                    <div className="flex w-[24%] items-center h-full dark:bg-black dark:text-[#ffff] rounded-xl border shadow p-1  border-[#EAEAEA] ">
                                        <span className="text-[16px] ps-1 ">
                                            {t('teachersPage.filters.ShowMore')}
                                        </span>
                                        <select
                                            value={coursesPerPage}
                                            onChange={(e) => {
                                                setTempCount(Number(e.target.value));
                                            }}
                                            className=" rounded-xl text-sm cursor-pointer px-2 py-1  dark:bg-black dark:text-[#ffff]"
                                        >
                                            <option value={16}>16</option>
                                            <option value={22}>22</option>
                                            <option value={28}>28</option>
                                        </select>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        type: 'spring',
                                        stiffness: 300,
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={applyFilter}
                                    className="text-center text-[14px] text-[#ffff] h-full w-[11%] rounded-2xl bg-[#008C78] "
                                >
                                    {t('teachersPage.filters.search')}
                                </motion.button>
                            </div>
                            {/* //// responsive //// */}
                            <SliderButtons sliderRef={sliderRef} />
                            {/* //// cards //// */}
                            <div
                                ref={sliderRef}
                                className="w-full flex flex-nowrap justify-items-start my-3 md:my-0 md:flex-wrap  overflow-y-hidden
                                 overflow-x-auto scroll-smooth pb-4 gap-4 "
                                style={{ direction: 'ltr' }}
                            >
                                {courses.length > 0 ? (
                                    courses.map((item, index) => (
                                        <DetailCard item={item} key={index} />
                                    ))
                                ) : (
                                    <p className=" text-center p-5 text-[#008C78] font-bold text-4xl mx-auto">
                                        {t('NoResultFound')}
                                    </p>
                                )}
                            </div>
                            {/* //// buttons //// */}
                            <div
                                className=" flex items-center justify-center gap-3"
                                style={{ direction: 'ltr' }}
                            >
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => goToPage(currentPage - 1)}
                                    className=' dark:bg-[#606060] cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3
                                     bg-[#EAEAEA] dark:text-[#ffff] text-[#1E1E1E]"}  bg-[center_center] bg-no-repeat '
                                    style={{ backgroundImage: `url(${leftIcon})` }}
                                ></button>
                                <div className="flex items-center justify-center gap-3">
                                    {Array.from({ length: totalPage }, (_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => goToPage(i + 1)}
                                            className={` dark:bg-[#606060] transition-all duration-300 cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3 ${
                                                currentPage === i + 1
                                                    ? 'bg-[#008C78] dark:bg-[#008C78]  text-[#ffff]'
                                                    : ' bg-[#EAEAEA] text-[#1E1E1E]'
                                            } `}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    disabled={currentPage === totalPage}
                                    onClick={() => goToPage(currentPage + 1)}
                                    className='cursor-pointer shadow-lg text-center w-[50px] h-[50px] rounded-[15px] p-3
                                     bg-[#EAEAEA] dark:text-[#ffff] dark:bg-[#606060] text-[#1E1E1E]"} bg-[center_center] bg-no-repeat '
                                    style={{ backgroundImage: `url(${rightIcon})` }}
                                ></button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default TeachersDetail;
