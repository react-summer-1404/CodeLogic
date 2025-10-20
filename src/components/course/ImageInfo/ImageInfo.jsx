import React from 'react'
import { useTranslation } from 'react-i18next'
import HTML5Course from '../../../assets/Images/HTML5Course.png'
import Like from '../../../assets/Icons/Like'
import DisLike from '../../../assets/Icons/DisLike'



const ImageInfo = () => {

    const {t} = useTranslation();

  return (
    <div className='flex flex-col gap-4'>
        <img src={HTML5Course} className='w-[887px] h-[443px] rounded-[25px]'/>
        <div className='flex justify-between'>
            <div>
                <span className='py-[1px] px-[11px] font-regular text-sm text-[#848484] border border-[#848484] rounded-[48px]'>
                    {t('HTML5')}
                </span>
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-2 py-2 px-3 text-[#848484] bg-[#EAEAEA] rounded-[48px]'>
                    <span className='font-regular text-base text-[#848484]'>{t('500')}</span>
                    <DisLike/>
                </div>
                <div className='flex gap-2 py-2 px-3 text-[#848484] bg-[#EAEAEA] rounded-[48px]'>
                    <span className='font-regular text-base text-[#848484]'>{t('500')}</span>
                    <Like/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageInfo