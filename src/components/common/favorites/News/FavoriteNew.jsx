import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import greenEye from '../../../../assets/Icons/A/greenEye.png';
import greenBasket from '../../../../assets/Icons/A/greenBasket.png';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFavNews } from '../../../../core/services/api/Delete/DeleteFavorites';
import { toast } from 'react-toastify';
import { getFavoriteNews } from '../../../../core/services/api/Get/GetFavorites';

const FavoriteNew = ({ items }) => {
    const queryClient = useQueryClient();
    //// delete new ///
    const { mutate: deleteNews, isPending } = useMutation({
        mutationKey: ['DELETENEW'],
        mutationFn: (value) => deleteFavNews(value),
        onSettled: (data) => {
            if (data.success) {
                toast.success(data.message);
                queryClient.invalidateQueries(['FAVNEWS']);
            } else if (!data.success) {
                toast.error(data.message);
            }
        },
    });
    //// framer ////
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
                    src={items.news.currentImageAddress}
                    alt=""
                />
                {items.news.title}
            </div>
            <div className="px-4 flex-1">{items.commentsCount}</div>
            <div className="px-4 flex-1">{items.viewsCount}</div>
            <div className="px-1 flex-1">{items.likesCount}</div>
            <div className="px-4 flex-1 truncate">{items.news.updateDate}</div>
            <div className="pe-8 w-[100px] text-left flex items-center justify-end gap-4">
                <div
                    style={{ backgroundImage: `url(${greenEye})` }}
                    className="w-6 h-4 cursor-pointer bg-no-repeat bg-[center_center] "
                ></div>
                <div
                    onClick={() => deleteNews(items.id)}
                    style={{ backgroundImage: `url(${greenBasket})` }}
                    className="w-4 h-4 cursor-pointer bg-[url(/icons/greenBasket.png)] bg-no-repeat bg-[center_center] "
                ></div>
            </div>
        </motion.div>
    );
};

export default FavoriteNew;
