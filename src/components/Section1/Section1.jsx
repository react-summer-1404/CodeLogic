import React from 'react'
import Section1Card from './Section1Card/Section1Card'

const Section1 = () => {

  const sectionData = [
    {id:1, title:'اساتید برتر', members:'+97'},
    {id:2, title:'دانشجوها', members:'+250'},
    {id:3, title:'دوره های آموزشی', members:'+154'},
    {id:4, title:'اخبار و مقالات', members:'+15'}
  ]

  return (
    <div className='flex justify-center text-[#FFFFFF] divide-x-[2px] divide-[#FFFFFF] bg-[#008C78]
    sa:py-4   sm:py-6   lg:py-8'>
      {sectionData.map((item, index) => {return <Section1Card item={item} key={index}/>})}
    </div>
  )
}

export default Section1