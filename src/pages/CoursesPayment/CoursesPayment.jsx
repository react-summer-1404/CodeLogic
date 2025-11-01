import React, { useState } from 'react';
import CourseHeader from '../../components/common/CoursePayment/CourseHeader/CourseHeader';
import { paymentsData } from '../../components/common/data/CoursePayments/payments';
import CoursePayment from '../../components/common/CoursePayment/CoursePayment';
import { AnimatePresence, motion, number } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CoursesPayment = () => {
    // i18n //
    const { i18n, t } = useTranslation();
    const isRTL = i18n.language === 'fa';
    // pagination //
    const [searchTerm, setSearchTerm] = useState('');
    const [curruntPage, setCurruntPage] = useState(1);
    const [paymentsPerPage, setPaymentsPerPage] = useState(2);
    const [filterStatus, setFilterStatus] = useState('all');
    const [showFilterStatus, setShowFilterStatus] = useState(false);
    const [showCount, setShowCount] = useState(false);

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
    const startIndex = (curruntPage - 1) * paymentsPerPage;
    const endIndex = startIndex + paymentsPerPage;
    const curruntPayments = filteredPayments.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);
    const goto = (p) => {
        if (p < 1 || p > totalPages) return;
        setCurruntPage(p);
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
            className="bg-[#F3F4F6] dark:bg-[#333]  w-full p-5 flex max-h-[600px] h-full
         flex-col justify-between  my-6 rounded-4xl "
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
                            src="/icons/search.png"
                            alt=""
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="relative">
                    <AnimatePresence>
                        <motion.button
                            variants={leftAnimate}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setShowFilterStatus((prev) => !prev)}
                            className={`dark:bg-black dark:text-[#ffff] cursor-pointer relative py-2 ${
                                isRTL ? 'pe-8 ps-2' : 'ps-8 pe-2'
                            } 
                        bg-[#ffff] shadow rounded-[16px]`}
                        >
                            {t('coursesPayment.filters')}
                            <span className={`${isRTL ? 'mr-1' : 'ml-1'} text-xs text-gray-300`}>
                                {filterStatus === 'all'
                                    ? `(${t('coursesPayment.all')})`
                                    : `(${filterStatus})`}
                            </span>
                            <img
                                className=" absolute left-2 top-[50%] translate-y-[-50%]  "
                                src="/icons/buttom.png"
                            />
                        </motion.button>
                    </AnimatePresence>

                    {showFilterStatus && (
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
                                    `${t('coursesPayment.confirmed')}`,
                                    `${t('coursesPayment.AwaitingConfirmation')}`,
                                    `${t('coursesPayment.notConfirmed')}`,
                                ].map((option) => (
                                    <li
                                        className={`  dark:bg-black dark:text-[#ffff]
                                             border-b w-full border-[#EAEAEA] px-4 py-2 cursor-pointer
                                         ${
                                             option === filterStatus
                                                 ? 'hover:bg-gray-300'
                                                 : 'hover:bg-green-600 hover:text-[#ffff] '
                                         } `}
                                        key={option}
                                        onClick={() => {
                                            setFilterStatus(option);
                                            setShowFilterStatus(false);
                                            setCurruntPage(1);
                                        }}
                                    >
                                        {option === 'all'
                                            ? `${t('coursesPayment.all')}`
                                            : `${option}`}
                                    </li>
                                ))}
                            </motion.ul>
                        </AnimatePresence>
                    )}
                </div>
            </div>
            {/* ------ payments */}
            <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                animate="visible"
                className="  dark:bg-black dark:text-[#ffff]
             h-[89%] bg-[#ffff] shadow rounded-4xl flex flex-col justify-between"
            >
                <div className="flex flex-col h-[70%] ">
                    <CourseHeader />
                    <div className="overflow-y-auto h-full">
                        {curruntPayments.length > 0 ? (
                            curruntPayments.map((items) => (
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
                            disabled={curruntPage === 1}
                            onClick={() => {
                                setCurruntPage((prev) => prev - 1);
                            }}
                            className="  dark:bg-black dark:text-[#ffff] cursor-pointer flex gap-3 mr-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
                        >
                            <img src="/icons/pl.png" alt="" />
                            {t('coursesPayment.back')}
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => {
                            const p = i + 1;
                            const active = p === curruntPage;
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
                            disabled={curruntPage === totalPages}
                            onClick={() => {
                                setCurruntPage((prev) => prev + 1);
                            }}
                            className="  dark:bg-black dark:text-[#ffff] cursor-pointer flex gap-3 ml-2 items-center bg-[#ffff] text-[16px] text-[#848484] "
                        >
                            {t('coursesPayment.next')}
                            <img src="/icons/pr.png" alt="" />
                        </button>
                    </div>
                    {/* ------------ filterCount */}
                    <div className="flex items-center dark:bg-black dark:text-[#ffff] rounded-xl border shadow-md p-1 border-[#EAEAEA] ">
                        <span className="text-[16px]">{t('coursesPayment.NumberShows')}</span>
                        <select
                            value={paymentsPerPage}
                            onChange={(e) => {
                                setPaymentsPerPage(Number(e.target.value));
                                setCurruntPage(1);
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
