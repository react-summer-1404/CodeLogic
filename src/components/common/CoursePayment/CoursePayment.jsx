import React from 'react'
import CourseHeader from '../CourseHeader/CourseHeader'
import { AnimatePresence, motion } from 'framer-motion';
const CoursePayment = ({ items }) => {
    /// motion ///
    const Animate = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 0.35 },
        },
    };
    return (
        <motion.div
            variants={Animate}
            initial="hidden"
            animate="visible"
            style={{ direction: "rtl" }}
            className=' dark:bg-black dark:text-[#ffff] transition-all w-full text-[16px] flex text-center items-center bg-[#ffff] py-4 border-b border-[#EAEAEA] ' >
            <div className='flex-[1.3] text-right ps-8' >{items.courseGroup}</div>
            <div className='px-4 flex-1'>{items.paymentDate}</div>
            <div className=' px-4 flex-1'>{items.enteredDate}</div>
            <div className={` px-1 py-1 rounded-xl flex-[0.8] text-[16px] ${items.paymentStatus === "تایید شده" ? "bg-[#EEFFFC] text-[#008C78] " : "bg-[#FFECEC] text-[#E7000B] "} `} >{items.paymentStatus}</div>
            <div className='px-4 flex-1'>{items.amount.toLocaleString()}</div>
            <div className='flex items-center justify-center w-[100px] pe-8  ' >
                <img className='cursor-pointer' src="/icons/document.png" alt="" />
            </div>
        </motion.div>

    )
}

export default CoursePayment