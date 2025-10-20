import React, {useRef} from 'react'
import Category from './Category/Category'
import LaptopDoc from '../../../assets/Icons/LaptopDoc'
import Bag from '../../../assets/Icons/Bag'
import Book from '../../../assets/Icons/Book'
import PersonTick from '../../../assets/Icons/PersonTick'
import BigArrowRight from '../../../assets/Icons/BigArrowRight'
import BigArrowLeft from '../../../assets/Icons/BigArrowLeft'


const Categories = () => {

  const categoriesData = [
    {id:1, icon: LaptopDoc, title: 'آموزش های مدرن', 
    desc: 'تمامی آموزش ها بروز هستند و مدرن ترین مطالب را در کنار ما یاد میگیرید.',},
    {id:2, icon: Bag, title: 'ساخت مسیر شغلی حرفه‌ای', 
    desc: 'هدف ما این است که افراد پس از آموزش، آماده‌ی ورود به بازار کار شوند.',},
    {id:3, icon: Book, title: 'ایجاد روحیه‌ی رشد و یادگیری مستمر', 
    desc: 'تکنولوژی همیشه در حال تغییر است. ما باور داریم که یادگیری هیچ وقت متوقف نمی‌شود.',},
    {id:4, icon: PersonTick, title: 'پرورش مهارت‌های حل مسئله', 
    desc: 'برنامه‌نویسی فقط نوشتن کد نیست؛ ما به دانشجویان خود تفکر منطقی، تحلیل چالش‌ها',}
  ];

  const scrollRef = useRef(null);
  const scrollAmount = 300; 
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className='flex flex-col items-center gap-2 pt-[97px]'>
        <h2 className='font-bold text-[#008C78]
        sa:text-[24px]   sm:text-[28px]   lg:text-[32px]'>با ما، در برنامه‌نویسی پیشتاز باشید.</h2>
        <p className='font-regular   dark:text-[#DDDDDD]  
        sa:text-sm   sm:text-lg   lg:text-2xl'>از مبتدی تا حرفه‌ای، همراه شما در مسیر برنامه‌نویسی.</p>
        <div className='overflow-hidden w-full px-4 relative'>
          <button onClick={scrollRight} className='absolute top-[144px] right-0 z-48   lg:hidden'>
            <BigArrowRight/>
          </button>
          <div ref={scrollRef} className='flex gap-6 w-full overflow-x-auto snap-x snap-mandatory pt-8   
          lg:justify-center lg:overflow-x-hidden lg:pb-4'>
            {categoriesData.map((item, index) => {return <Category item={item} key={index}/>})}
          </div>
          <button onClick={scrollLeft} className='text-[#088C78] absolute top-[144px] left-0 z-48   lg:hidden'>
            <BigArrowLeft/>
          </button>
        </div>
    </div>
  )
}

export default Categories