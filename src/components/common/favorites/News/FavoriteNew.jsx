import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const FavoriteNew = ({ items }) => {
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
            className=" dark:bg-black dark:text-[#ffff] w-full text-[16px] text-center font-semibold bg-[#ffff] rounded-t-4xl flex items-center py-5 border-b border-[#EAEAEA] "
            style={{ direction: 'rtl' }}
        >
            <div className="ps-8 flex items-center justify-start gap-4 flex-[1.5] text-right">
                <img
                    className="w-[28px] h-[28px] rounded-full object-cover"
                    src={items.newsImage}
                    alt=""
                />
                {items.newsTitle}
            </div>
            <div className="px-4 flex-1">{items.commentsCount}</div>
            <div className="px-4 flex-1">{items.viewsCount}</div>
            <div className="px-1 flex-1">{items.likesCount}</div>
            <div className="px-4 flex-1">{items.lastUpdate}</div>
            <div className="pe-8 w-[100px] text-left flex items-center justify-end gap-4">
                <div className="w-6 h-4 bg-[url(/icons/greenEye.png)] bg-no-repeat bg-[center_center] "></div>
                <div className="w-4 h-4 bg-[url(/icons/greenBasket.png)] bg-no-repeat bg-[center_center] "></div>
            </div>
        </motion.div>
    );
};

export default FavoriteNew;
