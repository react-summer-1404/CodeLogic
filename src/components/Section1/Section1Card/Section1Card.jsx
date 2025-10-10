import React from 'react'

const Section1Card = ({item}) => {

  return (
    <div className='flex items-center gap-4 px-16 h-[90px]'>
        <span className='font-regular text-2xl'>{item.title}</span>
        <span className='font-bold text-5xl'>{item.members}</span>
    </div>
  )
}

export default Section1Card