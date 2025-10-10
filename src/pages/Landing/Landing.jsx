import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Section1 from '../../components/Section1/Section1'
import Categories from '../../components/Categories/Categories'
import SliderCourses from '../../components/SliderCourses/SliderCourses'
import WhyUs from '../../components/WhyUs/WhyUs'
import SliderTeachers from '../../components/Sliderteachers/SliderTeachers'
import JoinTeachers from '../../components/JoinTeachers/JoinTeachers'

const Landing = () => {
  
  return (
    <div className='bg-[#F3F4F6]'>
      <HeroSection/>
      <Section1/>
      <Categories/>
      <SliderCourses/>
      <WhyUs/>
      <SliderTeachers/>
      <JoinTeachers/>
    </div>
  )
}

export default Landing;
