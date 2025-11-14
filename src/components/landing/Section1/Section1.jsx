import React from 'react'
import Section1Card from './Section1Card/Section1Card'
import { useTranslation } from 'react-i18next'

const Section1 = () => {

  const {t} = useTranslation();


  const sectionData = [
    {id:1, title:t('section1.title1'), members:'+97'},
    {id:2, title:t('section1.title2'), members:'+250'},
    {id:3, title:t('section1.title3'), members:'+154'},
    {id:4, title:t('section1.title4'), members:'+15'}
  ]

  return (
    <div className='flex justify-center w-full text-[#FFFFFF] divide-x-[2px] divide-[#FFFFFF] bg-[#008C78]   dark:divide-[#EEEEEE]
    sa:py-4   sm:py-6   lg:py-8'>
      {sectionData.map((item, index) => {return <Section1Card item={item} key={index}/>})}
    </div>
  )
}

export default Section1