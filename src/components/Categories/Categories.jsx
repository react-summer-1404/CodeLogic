import React from 'react'
import Category from './Category/Category'
import LaptopDoc from '../../assets/Icons/LaptopDoc'
import Bag from '../../assets/Icons/Bag'
import Book from '../../assets/Icons/Book'
import PersonTick from '../../assets/Icons/PersonTick'


const Categories = () => {

    const categoriesData = [
        {id:1, icon: LaptopDoc, title: 'آموزش های مدرن', 
        desc: 'تمامی آموزش ها بروز هستند و مدرن ترین مطالب را در کنار ما یاد میگیرید.', },
        {id:2, icon: Bag, title: 'ساخت مسیر شغلی حرفه‌ای', 
        desc: 'هدف ما این است که افراد پس از آموزش، آماده‌ی ورود به بازار کار شوند.', },
        {id:3, icon: Book, title: 'ایجاد روحیه‌ی رشد و یادگیری مستمر', 
        desc: 'تکنولوژی همیشه در حال تغییر است. ما باور داریم که یادگیری هیچ وقت متوقف نمی‌شود.', },
        {id:4, icon: PersonTick, title: 'پرورش مهارت‌های حل مسئله', 
        desc: 'برنامه‌نویسی فقط نوشتن کد نیست؛ ما به دانشجویان خود تفکر منطقی، تحلیل چالش‌ها', }
    ]

  return (
    <div className='flex flex-col items-center gap-2 pt-[97px]'>
        <h2 className='font-bold text-[32px] text-[#008C78]'>با ما، در برنامه‌نویسی پیشتاز باشید.</h2>
        <p className='font-regular text-2xl'>از مبتدی تا حرفه‌ای، همراه شما در مسیر برنامه‌نویسی.</p>
        <div className='flex gap-6 pt-8'>
          {categoriesData.map((item, index) => {return <Category item={item} key={index}/>})}
        </div>
    </div>
  )
}

export default Categories