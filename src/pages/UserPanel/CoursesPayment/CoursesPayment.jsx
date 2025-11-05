import React, { useState } from 'react';
import CourseHeader from '../../../components/common/course/CoursePayment/CourseHeader/CourseHeader';
import CoursePayment from '../../../components/common/course/CoursePayment/CoursePayment';
import { paymentsData } from '../../../components/common/data/CoursePayments/payments';
import { AnimatePresence, motion, number } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import pr from '../../../assets/Icons/A/pr.png';
import pl from '../../../assets/Icons/A/pl.png';
import searchIcon from '../../../assets/Icons/A/search.png';

const CoursesPayment = () => {
    // i18n //
    const { i18n, t } = useTranslation();
    const isRTL = i18n.language === 'fa';
    // pagination //
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setcurrentPage] = useState(1);
    const [paymentsPerPage, setPaymentsPerPage] = useState(2);
    const [filterStatus, setFilterStatus] = useState('all');

    const filteredPayments = paymentsData.filter((p) => {
        const matchesSearch =
            p.courseGroup.toLowerCase().trim().includes(searchTerm.trim().toLowerCase()) ||
            p.paymentDate.toLowerCase().trim().includes(searchTerm.trim().toLowerCase());
        const matchesStatus =
            filterStatus === 'all'
                ? true
                : p.paymentStatus.toLowerCase().trim().match(filterStatus.trim().toLowerCase());
        return matchesSearch && matchesStatus;
    });
    const startIndex = (currentPage - 1) * paymentsPerPage;
    const endIndex = startIndex + paymentsPerPage;
    const currentPayments = filteredPayments.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);
    const goto = (p) => {
        if (p < 1 || p > totalPages) return;
        setcurrentPage(p);
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
            className="bg-[#F3F4F6] dark:bg-[#333]  w-full p-5 flex max-h-[89%] h-full
         flex-col justify-between  mt-4 rounded-4xl "
        >
            {/* ----------- filtering  */}
            <div className="flex justify-between items-center">
                <AnimatePresence>
                    <motion.div
                        variants={rightAnimate}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className=" relative max-w-[439px] w-full"
                    >
                        <input
                            className=" dark:bg-black dark:text-[#ffff] dark:placeholder:text-white
                     w-full h-full shadow py-2 px-3 bg-[#ffff] rounded-[16px] focus:outline-none "
                            type="text"
                            placeholder={t('coursesPayment.search')}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <img
                            className={` absolute ${
                                isRTL ? 'left-3' : 'right-3'
                            } top-[50%] translate-y-[-50%] `}
                            src={searchIcon}
                            alt=""
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="flex h-full items-center bg-[#ffff] dark:bg-black dark:text-[#ffff] rounded-xl border shadow p-1 border-[#EAEAEA] ">
                    <span className="text-[16px]">{t('coursesPayment.filters')}</span>
                    <select
                        value={filterStatus}
                        onChange={(e) => {
                            setFilterStatus(e.target.value);
                            setcurrentPage(1);
                        }}
                        className=" rounded-xl text-sm cursor-pointer py-1 ps-2 text-gray-600
                         dark:bg-black dark:text-[#ffff] bg-[#ffff]"
                    >
                        <option value="all">({t('coursesPayment.all')})</option>
                        <option value="تایید شده">({t('coursesPayment.confirmed')})</option>
                        <option value="در انتظار تایید">
                            ({t('coursesPayment.AwaitingConfirmation')})
                        </option>
                        <option value="تایید نشده">({t('coursesPayment.notConfirmed')})</option>
                    </select>
                </div>
            </div>
            {/* ------ payments */}
            <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                animate="visible"
                className="  dark:bg-black dark:text-[#ffff]
             h-[85%] bg-[#ffff] shadow rounded-4xl flex flex-col justify-between"
            >
                <div className="flex flex-col h-[70%] ">
                    <CourseHeader />
                    <div className="overflow-y-auto h-full">
                        {currentPayments.length > 0 ? (
                            currentPayments.map((items) => (
                                <CoursePayment key={items.id} items={items} />
                            ))
                        ) : (
                            <h1 className="text-green-600 text-2xl font-bold text-center mt-20 ">
                                {t('coursesPayment.notFound')}
                            </h1>
                        )}
                    </div>
                </div>
                {/* -------- buttons */}
                <div className="flex justify-between p-8">
                    <div className="flex items-center gap-2" style={{ direction: 'ltr' }}>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => {
                                setcurrentPage((prev) => prev - 1);
                            }}
                            className="  dark:bg-black dark:text-[#ffff] cursor-pointer flex gap-3 mr-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
                        >
                            <img src={pl} alt="" />
                            {t('coursesPayment.back')}
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
                                setcurrentPage((prev) => prev + 1);
                            }}
                            className="  dark:bg-black dark:text-[#ffff] cursor-pointer flex gap-3 ml-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
                        >
                            {t('coursesPayment.next')}
                            <img src={pr} alt="" />
                        </button>
                    </div>
                    {/* ------------ filterCount */}
                    <div className="flex items-center dark:bg-black dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
                        <span className="text-[16px]">{t('coursesPayment.NumberShows')}</span>
                        <select
                            value={paymentsPerPage}
                            onChange={(e) => {
                                setPaymentsPerPage(Number(e.target.value));
                                setcurrentPage(1);
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

export default CoursesPayment;
