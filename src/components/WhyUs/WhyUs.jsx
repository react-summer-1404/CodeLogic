import React from 'react'
import ReadingBook from '../../assets/Images/readingbook.svg'
import { useTranslation } from 'react-i18next'

const WhyUs = () => {

  const whyUsItemsData = [
    {id:1, title: 'یادگیری مهارت‌های کاربردی', 
    desc: 'با تمرکز بر پروژه‌های واقعی و نیاز بازار، مهارت‌هایی یاد می‌گیرید که واقعاً به کارتون میان.'},
    {id:2, title: 'مسیر یادگیری هدفمند', 
    desc: 'از مبتدی تا متخصص، آموزش‌ها با برنامه‌ریزی دقیق طراحی شدن تا وقتتون هدر نره و قدم‌به‌قدم پیش برید.'},
    {id:3, title: 'پشتیبانی و منتورینگ', 
    desc: 'در طول دوره‌ها تنها نیستید؛ اساتید و منتورها همراه شما هستن تا سوالاتتون رو جواب بدن و راهنمایی‌تون کنن.'},
    {id:4, title: 'آموزش تکنولوژی‌های به‌روز', 
    desc: 'از HTML و CSS تا React، Node.js، پایتون، و هوش مصنوعی — همیشه به‌روز یاد می‌گیرید.'}
  ]

  const {t} = useTranslation();
  
  return (
    <div className='flex pt-[100px]'>
      <img src={ReadingBook}/>
      <div className='pt-8'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl text-[#1E1E1E]'>{t('از اولین خط کد تا')}
            <span className='text-[#008C78]'>{t(' ورود به بازار کار ')}</span>
          {t('، با تو هستیم')}</h2>
          <p className='font-regular text-base text-[#848484]'>{t('ما مسیر یادگیری برنامه‌نویسی را ساده، کاربردی و اثربخش می‌کنیم تا سریع‌تر وارد بازار کار شوید.')}</p>
        </div>
        <div>
          {whyUsItemsData.map((item, index) => {return <WhyUsItem/>})}
        </div>
      </div>
    </div>
  )
}

export default WhyUs