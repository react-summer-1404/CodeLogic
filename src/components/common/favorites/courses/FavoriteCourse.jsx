import { motion } from 'framer-motion';
import React from 'react';
import greenEye from '../../../../assets/Icons/A/greenEye.png';
import greenBasket from '../../../../assets/Icons/A/greenBasket.png';
const FavoriteCourse = ({ items }) => {
    const Animate = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: 'easeOut', duration: 0.35 },
        },
    };

    return (
        <motion.div
            variants={Animate}
            initial="hidden"
            animate="visible"
            className=" dark:bg-black dark:text-[#ffff] w-full text-[16px] text-center font-semibold bg-[#ffff] rounded-t-4xl flex items-center py-5 border-b border-[#EAEAEA] "
            style={{ direction: 'rtl' }}
        >
            <div className="ps-8 flex items-center justify-start gap-4 flex-[1.5] text-right">
                <img
                    className="w-[28px] h-[28px] rounded-full object-cover"
                    src={items.coursesImage}
                    alt=""
                />
                {items.courses}
            </div>
            <div className="ps-3 flex-[1.2] text-right overflow-ellipsis ">{items.caption}</div>
            <div className="px-4 flex-1">{items.meetingMode}</div>
            <div className="px-4 flex-1">{items.lastUpdate}</div>
            <div className="pe-8 w-[100px] text-left flex items-center justify-end gap-4">
                <div
                    style={{ backgroundImage: `url(${greenEye})` }}
                    className="w-6 h-4  bg-no-repeat bg-[center_center] "
                ></div>
                <div
                    style={{ backgroundImage: `url(${greenBasket})` }}
                    className="w-4 h-4 bg-no-repeat bg-[center_center] "
                ></div>
            </div>
        </motion.div>
    );
};

export default FavoriteCourse;
