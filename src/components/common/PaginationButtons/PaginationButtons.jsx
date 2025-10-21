import React from 'react';
import Arrow from '../../../assets/Icons/Arrow'; 


const PaginationButtons = ({ currentPage, totalPages, isLoading, onPageChange }) => {

  if (totalPages <= 1) {return null;}

  // تابع مدیریت کلیک روی دکمه‌ها
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
    window.scrollTo(0, 0); 
  };

  // رندر دکمه‌های عددی (مثلاً 5 دکمه در اطراف صفحه فعلی)
  const renderPageNumbers = () => {
    const pagesToShow = 5; 
    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    
    // اگر تعداد دکمه‌ها کمتر از 5 شد، شروع را تنظیم کن
    if (endPage - startPage + 1 < pagesToShow) {
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    const pageButtons = [];
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <li key={i} onClick={() => handlePageChange(i)} 
        className={`py-[9px] px-[20px] font-regular text-[18px] rounded-[15px] cursor-pointer
        ${currentPage === i ? 'text-white bg-[#008C78]' : 'text-[#1E1E1E] bg-[#EAEAEA]'}
        ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
          {i}
        </li>
      );
    }
    return pageButtons;
  };

  return (
    <div className='flex flex-col gap-2 pt-10 pb-40'>
        <ul className='flex flex-row gap-2 justify-center items-center'>
          <li onClick={() => handlePageChange(currentPage - 1)} 
          className={`p-2 rotate-180 cursor-pointer ${currentPage === 1 || isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
            <Arrow/> 
          </li>

          {renderPageNumbers()} 
          
          <li onClick={() => handlePageChange(currentPage + 1)} 
            className={`p-2 cursor-pointer ${currentPage === totalPages || isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
            <Arrow/>
          </li>
        </ul>
    </div>
  );
};

export default PaginationButtons;