import React, { useCallback } from 'react'
import Search from '../../../../assets/Icons/Search'
import { t } from 'i18next'
import debounce from 'lodash.debounce'


const UserPanelSearch = ({width , handleSearch}) => {


    const debouncedSearch = useCallback(
        debounce((value) => {
            handleSearch(value);
        }, 2000),[]
    );
    const handleChange = (e) => {
        const value = e.target.value;
        debouncedSearch(value);
    };

    
    return (
        <div className={`flex items-center relative`}>
            <input 
            type='search' 
            placeholder={t('userPanelSearch.placeholder')}
            onChange={handleChange} 
            className={`${width} h-12 indent-[16px] font-regular text-base text-[#848484] bg-[#FFFFFF] border border-[#EAEAEA] 
            rounded-2xl outline-0   dark:text-[#CCCCCC] dark:bg-[#454545]`}/>
            <span className='absolute top-4 left-4   dark:text-[#CCCCCC]'>
                <Search/>
            </span>
        </div>
    )
}

export default UserPanelSearch