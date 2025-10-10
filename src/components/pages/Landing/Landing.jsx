import React from 'react'
import HeroSection from '../../common/HeroSection/HeroSection'
import Section1 from '../../Section1/Section1'
import Categories from '../../Categories/Categories'
import SliderCourses from '../../SliderCourses/SliderCourses'

const Landing = () => {
  return (
    <div className='bg-[#F3F4F6]'>
      <HeroSection/>
      <Section1/>
      <Categories/>
      <SliderCourses/>
    </div>
  )
}

export default Landing;
