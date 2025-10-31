import React, { useState } from 'react'
import Like from '../../../assets/Icons/Like'
import DisLike from '../../../assets/Icons/DisLike'



const ImageInfo = ({ course }) => {

    const [active, setActive] = useState(false);

    return (
        <div className='flex flex-col gap-4'>
            <img src={course.imageAddress} className='w-full
            md:h-[240px] md:rounded-[16px]
            lg:h-[443px] lg:rounded-[25px]' />
            <div className='flex justify-between'>
                <div>
                    <span className='py-[1px] px-[11px] font-regular text-sm text-[#848484] border border-[#848484] rounded-[48px]'>
                        {'HTML5'}
                    </span>
                </div>
                <div className='flex gap-2'>
                    <div onClick={() => {setActive(!active)}} className='flex gap-2 py-2 px-3 text-[#848484] bg-[#EAEAEA] 
                    rounded-[48px]   
                    dark:bg-[#393939]'>
                        <span className='font-regular text-base text-[#848484]'>{course.likeCount}</span>
                        {
                            active ? <span className='rotate-180 transform scale-x-[-1]'><Like/></span> : <DisLike/>
                        }
                    </div>
                    <div  onClick={() => {setActive(!active)}} className='flex gap-2 py-2 px-3 text-[#848484] bg-[#EAEAEA] 
                    rounded-[48px]   
                    dark:bg-[#393939]'>
                        <span className='font-regular text-base text-[#848484]'>{course.dissLikeCount}</span>
                        {
                            active ? <span className='rotate-180 transform scale-x-[-1]'><DisLike/></span> : <Like/>
                        }
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ImageInfo