import React, { useState } from 'react';
import CourseHeader from '../../../components/common/favorites/courses/FavoriteCourseHeader/CourseHeader';
import { useTranslation } from 'react-i18next';
import { FavoriteCoursesData } from '../../../components/common/data/Favorites/FavoriteCourses';
import FavoriteCourse from '../../../components/common/favorites/courses/FavoriteCourse';
import { AnimatePresence, motion } from 'framer-motion';

const FavoriteCourses = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'fa';
    //// pagination ////
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage, setCoursesPerPage] = useState(2);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFiltersOption, setShowFiltersOption] = useState(false);
    const [filterOption, setFilterOption] = useState('all');

    const filteredCourses = FavoriteCoursesData.filter((n) => {
        const matchesSearch = n.courses
            .trim()
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase());
        const matchesFilter =
            filterOption === 'all'
                ? true
                : n.meetingMode.trim().toLowerCase().match(filterOption.trim().toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const startIndex = (currentPage - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const currentCourses = filteredCourses.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    const goto = (p) => {
        if (p > totalPages || p < 1) return;
        setCurrentPage(p);
    };
    /// motion framer ///
    const fadeInUp = (delay) => ({
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut', delay },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.4, ease: 'easeOut', delay },
        },
    });
    const leftAnimate = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 300, duration: 0.3 },
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: { duration: 0.35, type: 'spring', stiffness: 250 },
        },
    };
    const rightAnimate = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 250, duration: 0.35 },
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: { duration: 0.35, type: 'spring', stiffness: 250 },
        },
    };

    return (
        <div
            className="bg-[#F3F4F6] dark:bg-[#333]  w-full p-8 flex
     min-h-[700px] flex-col justify-between mx-auto my-7 rounded-4xl "
        >
            <div className="flex justify-between items-center">
                {/* filters ------- */}
                <motion.div
                    variants={rightAnimate}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative max-w-[439px] w-full"
                >
                    <input
                        className=" dark:bg-black dark:text-[#ffff] dark:placeholder:text-white
                     w-full h-full shadow py-2 px-3 bg-[#ffff] rounded-[16px] focus:outline-none "
                        type="text"
                        placeholder={t('favoriteCourses.search')}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                    <img
                        className={` absolute ${
                            isRTL ? 'left-3' : 'right-3'
                        } top-[50%] translate-y-[-50%] `}
                        src="/icons/search.png"
                        alt=""
                    />
                </motion.div>
                <div className="relative">
                    <AnimatePresence>
                        <motion.button
                            variants={leftAnimate}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`dark:bg-black dark:text-[#ffff] cursor-pointer relative py-2 ${
                                isRTL ? 'pe-8 ps-2' : 'ps-8 pe-2'
                            } 
                        bg-[#ffff] shadow rounded-[16px]`}
                            onClick={() => setShowFiltersOption((prev) => !prev)}
                        >
                            {t('favoriteCourses.filters')}
                            <span className={`${isRTL ? 'mr-1' : 'ml-1'} text-xs text-gray-300`}>
                                {filterOption === 'all'
                                    ? `(${t('favoriteCourses.all')})`
                                    : `(${filterOption})`}
                            </span>
                            <img
                                className=" absolute left-2 top-[50%] translate-y-[-50%]  "
                                src="/icons/buttom.png"
                            />
                        </motion.button>
                    </AnimatePresence>

                    {showFiltersOption && (
                        <AnimatePresence>
                            <motion.ul
                                variants={fadeInUp(0)}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="  dark:bg-black dark:text-[#ffff]
                                                     rounded-xl shadow absolute right-0 mt-2 w-full bg-[#ffff] border border-[#EAEAEA] "
                            >
                                {[
                                    'all',
                                    `${t('favoriteCourses.faceToFace')}`,
                                    `${t('favoriteCourses.online')}`,
                                ].map((option) => (
                                    <li
                                        className={`  dark:bg-black dark:text-[#ffff]
                                                                 border-b w-full border-[#EAEAEA] px-4 py-2 cursor-pointer
                                                             ${
                                                                 option === filterOption
                                                                     ? 'hover:bg-gray-300'
                                                                     : 'hover:bg-green-600 hover:text-[#ffff] '
                                                             } `}
                                        key={option}
                                        onClick={() => {
                                            setFilterOption(option);
                                            setShowFiltersOption(false);
                                            setCurrentPage(1);
                                        }}
                                    >
                                        {option === 'all'
                                            ? `${t('favoriteCourses.all')}`
                                            : `${option}`}
                                    </li>
                                ))}
                            </motion.ul>
                        </AnimatePresence>
                    )}
                </div>
            </div>
            {/* favorite courses -------- */}
            <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                animate="visible"
                className=" dark:bg-black dark:text-[#ffff]
             h-[89%] bg-[#ffff] shadow rounded-4xl flex flex-col justify-between"
            >
                <div className="flex flex-col">
                    <CourseHeader />
                    {currentCourses.length > 0 ? (
                        currentCourses.map((items) => (
                            <FavoriteCourse items={items} key={items.id} />
                        ))
                    ) : (
                        <h1 className="text-green-600 text-2xl font-bold text-center mt-20 ">
                            {t('favoriteCourses.notFound')}
                        </h1>
                    )}
                </div>
                {/* buttons ------- */}
                <div className="flex justify-between p-8">
                    <div className="flex items-center gap-2" style={{ direction: 'ltr' }}>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => {
                                setCurrentPage((prev) => prev - 1);
                            }}
                            className="  dark:bg-black dark:text-[#ffff] cursor-pointer flex gap-3 mr-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
                        >
                            <img src="/icons/pl.png" alt="" />
                            {t('favoriteCourses.back')}
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => {
                            const p = i + 1;
                            const active = p === currentPage;
                            return (
                                <button
                                    key={p}
                                    onClick={() => goto(p)}
                                    className={` w-8 h-8 transition-all duration-200 cursor-pointer text-[16px] text-center text-[#848484] rounded-full ${
                                        active ? 'bg-[#008C78] text-[#ffff] ' : ''
                                    } `}
                                >
                                    {p}
                                </button>
                            );
                        })}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => {
                                setCurrentPage((prev) => prev + 1);
                            }}
                            className="  dark:bg-black dark:text-[#ffff] cursor-pointer flex gap-3 ml-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
                        >
                            {t('favoriteCourses.next')}
                            <img src="/icons/pr.png" alt="" />
                        </button>
                    </div>
                    {/* filtering counts ------ */}
                    <div className="flex items-center dark:bg-black dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
                        <span className="text-[16px]">{t('favoriteCourses.NumberShows')}</span>
                        <select
                            value={coursesPerPage}
                            onChange={(e) => {
                                setCoursesPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                            className=" rounded-xl text-sm cursor-pointer px-3 py-1  dark:bg-black dark:text-[#ffff]"
                        >
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                        </select>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FavoriteCourses;
