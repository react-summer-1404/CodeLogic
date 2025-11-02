import React, { useState } from 'react';
import NewsHeader from '../../../components/common/favorites/News/newsHeader/NewsHeader';
import { useTranslation } from 'react-i18next';
import FavoriteNew from '../../../components/common/favorites/News/FavoriteNew';
import { FavoriteNewsData } from '../../../components/common/data/Favorites/FavoriteNewsData';
import { AnimatePresence, motion, number } from 'framer-motion';
import pr from '../../../assets/Icons/A/pr.png';
import pl from '../../../assets/Icons/A/pl.png';
import searchIcon from '../../../assets/Icons/A/search.png';

const FavoriteNews = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'fa';
    /// pagination ///
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(2);
    const [searchTerm, setSearchTerm] = useState('');
    const [showCount, setShowCount] = useState(false);
    const [showFiltersOption, setShowFiltersOption] = useState(false);
    const [filterOption, setFilterOption] = useState('all');
    const filteredNews = FavoriteNewsData.filter((n) =>
        n.newsTitle.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
    ).sort((a, b) => {
        if (filterOption === 'بیشترین لایک') {
            return b.likesCount - a.likesCount;
        } else if (filterOption === 'بیشترین بازدید') {
            return b.viewsCount - a.viewsCount;
        }
        return 0;
    });

    const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const currentNews = filteredNews.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredNews.length / newsPerPage);
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
            className="bg-[#F3F4F6] dark:bg-[#333]  w-full p-5 flex
     max-h-[600px] h-full flex-col justify-between mx-auto my-6 rounded-4xl "
        >
            <div className="flex justify-between items-center">
                {/* filtering ------ */}
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
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        placeholder={t('favoriteNews.search')}
                    />
                    <img
                        className={` absolute ${
                            isRTL ? 'left-3' : 'right-3'
                        } top-[50%] translate-y-[-50%] `}
                        src={searchIcon}
                        alt=""
                    />
                </motion.div>
                <div className="flex h-full items-center bg-[#ffff] dark:bg-black dark:text-[#ffff] rounded-xl border shadow p-1 border-[#EAEAEA] ">
                    <span className="text-[16px]">{t('coursesPayment.filters')}</span>
                    <select
                        value={filterOption}
                        onChange={(e) => {
                            setFilterOption(e.target.value);
                            setCurrentPage(1);
                        }}
                        className=" rounded-xl text-sm cursor-pointer py-1 ps-2 text-gray-600
                         dark:bg-black dark:text-[#ffff] bg-[#ffff]"
                    >
                        <option value="all">({t('favoriteNews.all')})</option>
                        <option value="بیشترین لایک">({t('favoriteNews.mostLikes')})</option>
                        <option value="بیشترین بازدید">({t('favoriteNews.mostViews')})</option>
                    </select>
                </div>
            </div>
            {/* favorite news ------- */}
            <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                animate="visible"
                className=" dark:bg-black dark:text-[#ffff]
             h-[89%] bg-[#ffff] shadow rounded-4xl flex flex-col justify-between"
            >
                <div className="flex flex-col h-[70%]">
                    <NewsHeader />
                    <div className="overflow-y-auto h-full">
                        {currentNews.length > 0 ? (
                            currentNews.map((items) => <FavoriteNew key={items.id} items={items} />)
                        ) : (
                            <h1 className="text-green-600 text-2xl font-bold text-center mt-20 ">
                                {t('favoriteNews.notFound')}
                            </h1>
                        )}
                    </div>
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
                            <img src={pl} alt="" />
                            {t('favoriteNews.back')}
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
                            {t('favoriteNews.next')}
                            <img src={pr} alt="" />
                        </button>
                    </div>
                    {/* filtering counts ------ */}
                    <div className="flex items-center dark:bg-black dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
                        <span className="text-[16px]">{t('favoriteNews.NumberShows')}</span>
                        <select
                            value={newsPerPage}
                            onChange={(e) => {
                                setNewsPerPage(Number(e.target.value));
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

export default FavoriteNews;
