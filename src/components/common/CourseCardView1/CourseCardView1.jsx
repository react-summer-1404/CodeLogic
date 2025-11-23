// <<<<<<< HEAD
// import React, { useState } from 'react'
// import Teacher from '../../../assets/Icons/Teacher'
// import Level from '../../../assets/Icons/Level'
// import Star from '../../../assets/Icons/Star'
// import Heart from '../../../assets/Icons/Heart'
// import { useTranslation } from 'react-i18next'
// import { Link } from 'react-router-dom'
// import CourseCardView1Skeleton from '../skeleton/CourseCardSkeletonView1/CourseCardSkeletonView1'
// import { toast } from 'react-toastify'
// =======
// import React, { useState } from "react";
// import Teacher from "../../../assets/Icons/Teacher";
// import Level from "../../../assets/Icons/Level";
// import Star from "../../../assets/Icons/Star";
// import Heart from "../../../assets/Icons/Heart";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import CourseCardView1Skeleton from "../skeleton/CourseCardSkeletonView1/CourseCardSkeletonView1";
// >>>>>>> feature/panel/dashboard

// const CourseCardView1 = ({ item, handleToggleFavorite, isLoading }) => {
//   const { t } = useTranslation();

//   const [isFavorite, setIsFavorite] = useState();
//   const onToggleFavorite = () => {
//     handleToggleFavorite(item.courseId);
//     setIsFavorite(!isFavorite);
//   };

//   if (isLoading) {
//     return <CourseCardView1Skeleton />;
//   }

// <<<<<<< HEAD
//     const {t, i18n} = useTranslation();
//     const isRtl = i18n.language === 'fa'

//     const [isFavorite , setIsFavorite] = useState();
//     const onToggleFavorite = () => {
//         handleToggleFavorite(item.courseId)
//         setIsFavorite(!isFavorite)
//         if(isFavorite === false) toast.success(t('courseCard.likeSuccessToast'))
//         else if(isFavorite === true) toast.success(t('courseCard.disLikeSuccessToast'))
//     }

//     if(isLoading){
//         return <CourseCardView1Skeleton/>
//     }

//     return (
//         <div dir='rtl' className='flex flex-col flex-shrink-0 items-center w-[240px] rounded-xl duration-300 relative
//         hover:scale-[1.02] hover:shadow-[0px_0px_10px_1px_#008c78]
//         sm:w-[350px] sm:rounded-[20px]'>
//             <img src={item.imageAddress} className='w-full h-[160px] rounded-t-xl
//             sm:h-[259px] sm:rounded-t-[20px]'/>
//             <Link to={`/courseDetail/${item.courseId}`} className='flex flex-col justify-between w-full mb-[-16px]
//             p-4 bg-[#FFFFFF] rounded-xl transform -translate-y-4 cursor-pointer   dark:bg-[#606060]
//             sm:h-[217px] sm:rounded-[20px]'
//             dir={isRtl ? 'rtl' : 'ltr'}>
//                 <div className='flex flex-col gap-1'>
//                     <h2 className='font-bold text-base   dark:text-[#EEEEEE]'>{t(`${item.title}`)}</h2>
//                     <p className='max-w-[317px] font-regular text-sm   dark:text-[#DDDDDD]'>{t(`${item.describe}`)}</p>
//                 </div>
//                 <div>
//                     <div className='flex justify-between pt-8'>
//                         <div className='flex items-center gap-1   dark:text-[#DDDDDD]'>
//                             <Teacher className='text-[#848484]' />
//                             <span className='font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]'>{t(`${item.teacherName}`)}</span>
//                         </div>
//                         <div className='flex items-center gap-1   dark:text-[#DDDDDD]'>
//                             <Level className='text-[#848484]' />
//                             <span className='font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]'>{t(`${item.levelName}`)}</span>
//                         </div>
//                     </div>
//                     <div className='flex justify-between pt-2'>
//                         <div className='flex flex-col justify-end gap-1'>
//                             <span className='font-regular text-xs text-[#1E1E1E]   dark:text-[#EEEEEE]'>{t('courseCard.price')}</span>
//                             <div className='flex'>
//                                 <span className='font-bold text-base text-[#008C78]'>{item.cost} {t('courseCard.toman')}</span>
//                             </div>
//                         </div>
//                         <div className='flex items-center gap-1'>
//                             <span className='font-regular text-sm text-[#F8BC24]'>{t(`${Math.floor(item.courseRate.avg)}`)}</span>
//                             <Star />
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//             <button onClick={onToggleFavorite}
//             className={`p-2 rounded-[50px] transition absolute top-[13px] right-[14px] cursor-pointer opacity-25 text-[#EEEEEE]
//             ${isFavorite ? 'bg-[#FF0000]' : 'bg-[#000000]'}`}>
//                 <Heart />
//             </button>
// =======
//   const description = t(`${item.describe}`);

//   const descriptionslice =
//     description.length > 70 ? description.slice(0, 70) + "..." : description;

//   return (
//     <div
//       dir="rtl"
//       className="   flex flex-col flex-shrink-0 items-center w-[240px] rounded-xl relative
//         hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]
//         sm:w-[350px] sm:rounded-[20px]"
//     >
//       <img
//         src={item.imageAddress}
//         className="w-full h-[160px] rounded-t-xl
//             sm:h-[259px] sm:rounded-t-[20px]"
//       />
//       <Link
//         to={`/courseDetail/${item.courseId}`}
//         className="flex flex-col justify-between w-full mb-[-16px]
//             p-4 bg-[#FFFFFF] rounded-xl transform -translate-y-4 cursor-pointer   dark:bg-[#606060]
//             sm:h-[217px] sm:rounded-[20px]"
//       >
//         <div className="flex flex-col gap-1">
//           <h2 className="font-bold text-base   dark:text-[#EEEEEE]">
//             {t(`${item.title}`)}
//           </h2>
//           <p className="max-w-[317px] font-regular text-sm   dark:text-[#DDDDDD]">
//             {descriptionslice}
//           </p>
// >>>>>>> feature/panel/dashboard
//         </div>
//         <div>
//           <div className="flex justify-between pt-8">
//             <div className="flex items-center gap-1   dark:text-[#DDDDDD]">
//               <Teacher className="text-[#848484]" />
//               <span className="font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]">
//                 {t(`${item.teacherName}`)}
//               </span>
//             </div>
//             <div className="flex items-center gap-1   dark:text-[#DDDDDD]">
//               <Level className="text-[#848484]" />
//               <span className="font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]">
//                 {t(`${item.levelName}`)}
//               </span>
//             </div>
//           </div>
//           <div className="flex justify-between pt-2">
//             <div className="flex flex-col justify-end gap-1">
//               <span className="font-regular text-xs text-[#1E1E1E]   dark:text-[#EEEEEE]">
//                 {t("قیمت")}
//               </span>
//               <div className="flex flex-col">
//                 <span className="font-bold text-base text-[#008C78]">
//                   {t(`${item.cost} تومان`)}
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center gap-1">
//               <span className="font-regular text-sm text-[#F8BC24]">
//                 {t(`${Math.floor(item.courseRate.avg)}`)}
//               </span>
//               <Star />
//             </div>
//           </div>
//         </div>
//       </Link>
//       <button
//         onClick={onToggleFavorite}
//         className={`p-2 rounded-[50px] transition absolute top-[13px] right-[14px] cursor-pointer opacity-25 text-[#EEEEEE]
//             ${isFavorite ? "bg-[#FF0000]" : "bg-[#000000]"}`}
//       >
//         <Heart />
//       </button>
//     </div>
//   );
// };

// export default CourseCardView1;
import React, { useState } from "react";
import Teacher from "../../../assets/Icons/Teacher";
import Level from "../../../assets/Icons/Level";
import Star from "../../../assets/Icons/Star";
import Heart from "../../../assets/Icons/Heart";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CourseCardView1Skeleton from "../skeleton/CourseCardSkeletonView1/CourseCardSkeletonView1";

const CourseCardView1 = ({ item, handleToggleFavorite, isLoading }) => {
  const { t } = useTranslation();

  const [isFavorite, setIsFavorite] = useState();
  const onToggleFavorite = () => {
    handleToggleFavorite(item.courseId);
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return <CourseCardView1Skeleton />;
  }

  const description = t(`${item.describe}`);

  const descriptionslice =
    description.length > 70 ? description.slice(0, 70) + "..." : description;

  return (
    <div
      dir="rtl"
      className="   flex flex-col flex-shrink-0 items-center w-[240px] rounded-xl relative 
        hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]
        sm:w-[350px] sm:rounded-[20px]"
    >
      <img
        src={item.imageAddress}
        className="w-full h-[160px] rounded-t-xl
            sm:h-[259px] sm:rounded-t-[20px]"
      />
      <Link
        to={`/courseDetail/${item.courseId}`}
        className="flex flex-col justify-between w-full mb-[-16px] 
            p-4 bg-[#FFFFFF] rounded-xl transform -translate-y-4 cursor-pointer   dark:bg-[#606060]
            sm:h-[217px] sm:rounded-[20px]"
      >
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-base   dark:text-[#EEEEEE]">
            {t(`${item.title}`)}
          </h2>
          <p className="max-w-[317px] font-regular text-sm   dark:text-[#DDDDDD]">
            {descriptionslice}
          </p>
        </div>
        <div>
          <div className="flex justify-between pt-8">
            <div className="flex items-center gap-1   dark:text-[#DDDDDD]">
              <Teacher className="text-[#848484]" />
              <span className="font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]">
                {t(`${item.teacherName}`)}
              </span>
            </div>
            <div className="flex items-center gap-1   dark:text-[#DDDDDD]">
              <Level className="text-[#848484]" />
              <span className="font-regular text-xs text-[#848484]   dark:text-[#DDDDDD]">
                {t(`${item.levelName}`)}
              </span>
            </div>
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex flex-col justify-end gap-1">
              <span className="font-regular text-xs text-[#1E1E1E]   dark:text-[#EEEEEE]">
                {t("قیمت")}
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-base text-[#008C78]">
                  {t(`${item.cost} تومان`)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-regular text-sm text-[#F8BC24]">
                {t(`${Math.floor(item.courseRate.avg)}`)}
              </span>
              <Star />
            </div>
          </div>
        </div>
      </Link>
      <button
        onClick={onToggleFavorite}
        className={`p-2 rounded-[50px] transition absolute top-[13px] right-[14px] cursor-pointer opacity-25 text-[#EEEEEE] 
            ${isFavorite ? "bg-[#FF0000]" : "bg-[#000000]"}`}
      >
        <Heart />
      </button>
    </div>
  );
};

export default CourseCardView1;
