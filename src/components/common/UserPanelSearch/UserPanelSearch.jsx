import React from 'react'
import Search from '../../../assets/Icons/Search'
import { useTranslation } from 'react-i18next'



const UserPanelSearch = ({width}) => {

    const {t} = useTranslation();

    return (
        <div className={`flex items-center w-[${width}] h-[48px] font-regular text-base text-[#848484] border border-[#EAEAEA] rounded-2xl 
        relative`}>
            <input placeholder={t('userPanelSearch.placeholder')} className='indent-[16px]'/>
            <span className='absolute top-4 left-4'>
                <Search/>
            </span>
        </div>
    )
}

export default UserPanelSearch