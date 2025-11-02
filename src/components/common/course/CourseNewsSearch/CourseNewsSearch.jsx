import React, {useState} from 'react'
import Search from '../../../../assets/Icons/Search'
import { useTranslation } from 'react-i18next'



const CourseNewsSearch = ({handleSearchSubmit}) => {

    const [search, setSearch] = useState('');
    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && handleSearchSubmit){
            handleSearchSubmit(search);
        }
    };
    const handleSearchClick = () => {
        if(handleSearchSubmit){
            handleSearchSubmit(search);
        }
    };


    const {t,i18n} = useTranslation();
    const isRtl = i18n.language === "fa";

    return (
        <div className='relative'>
            <input type='search' placeholder={t('courseListSide.searchPlaceholder')} value={search} onChange={(e) => {setSearch(e.target.value)}} 
            onKeyDown={handleKeyDown} 
            className='w-full h-[46px] px-4 font-regular text-base text-[#848484] bg-[#FFFFFF] rounded-[15px] outline-0
            md:w-[284px]'/>
            <div onClick={handleSearchClick} className={`absolute top-[15px] ${isRtl ? 'left-4' : 'right-4'}`}>
                <Search />
            </div>
        </div>
  )
}

export default CourseNewsSearch