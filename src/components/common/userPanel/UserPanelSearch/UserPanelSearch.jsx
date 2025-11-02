import React from 'react'
import Search from '../../../../assets/Icons/Search'
import { useTranslation } from 'react-i18next'



const UserPanelSearch = ({width}) => {

    const {t} = useTranslation();

    return (
        <div className={`flex items-center relative`}>
            <input placeholder={t('userPanelSearch.placeholder')} className={`${width} h-12 indent-[16px] font-regular 
            text-base text-[#848484] bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl outline-0
            dark:text-[#CCCCCC] dark:bg-[#454545]`}/>
            <span className='absolute top-4 left-4   dark:text-[#CCCCCC]'>
                <Search/>
            </span>
        </div>
    )
}

export default UserPanelSearch