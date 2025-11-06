import { motion } from 'framer-motion';
import React from 'react';
import greenEye from '../../../../assets/Icons/A/greenEye.png';
import greenBasket from '../../../../assets/Icons/A/greenBasket.png';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteFavCourses } from '../../../../core/services/api/delete/deleteFavCourses';
const FavoriteCourse = ({ items }) => {
    /// face data ///
    const mode = ['انلاین', 'حضوری'];
    const meetingMode = mode[Math.floor(Math.random() * mode.length)];
    ///// get from backend ////
    const queryClient = useQueryClient();
    const { mutate: deleteCourse } = useMutation({
        mutationKey: ['DELETECOURSE'],
        mutationFn: (value) => deleteFavCourses(value),
        onSettled: (data) => {
            if (data.success) {
                toast.success(data.message);
                queryClient.invalidateQueries(['FAVCOURSES']);
            } else if (!data.success) {
                toast.error(data.message);
            }
        },
    });
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
            className=" dark:bg-[#454545] dark:text-[#ffff] w-full text-[16px] text-center font-semibold bg-[#ffff] rounded-t-4xl flex items-center py-5 border-b border-[#EAEAEA] "
            style={{ direction: 'rtl' }}
        >
            <div className="ps-8 flex items-center justify-start gap-4 flex-[1.5] text-right">
                <img
                    className="w-[28px] h-[28px] rounded-full object-cover"
                    src={items.coursesImage}
                    alt=""
                />
                {items.courseTitle}
            </div>
            <div className="ps-3 flex-[1.2] text-right overflow-ellipsis truncate ">{`این دوره توسط استاد ${items.teacheName}`}</div>
            <div className="px-4 flex-1">{meetingMode}</div>
            <div className="px-4 flex-1 truncate">{items.lastUpdate}</div>
            <div className="pe-8 w-[100px] text-left flex items-center justify-end gap-4">
                <div
                    style={{ backgroundImage: `url(${greenEye})` }}
                    className="w-6 h-4 cursor-pointer bg-no-repeat bg-[center_center] "
                ></div>
                <div
                    onClick={() => {
                        deleteCourse(items.favoriteId);
                        console.log(items.courseId);
                    }}
                    style={{ backgroundImage: `url(${greenBasket})` }}
                    className="w-4 cursor-pointer h-4 bg-no-repeat bg-[center_center] "
                ></div>
            </div>
        </motion.div>
    );
};

export default FavoriteCourse;
