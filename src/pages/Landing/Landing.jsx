import React from 'react'
import HeroSection from '../../components/landing/HeroSection/HeroSection'
import Section1 from '../../components/landing/Section1/Section1'
import Categories from '../../components/landing/Categories/Categories'
import SliderCourses from '../../components/landing/SliderCourses/SliderCourses'
import WhyUs from '../../components/landing/WhyUs/WhyUs'
import SliderTeachers from '../../components/landing/SliderTeachers/SliderTeachers'
import JoinTeachers from '../../components/landing/JoinTeachers/JoinTeachers'
import NewsListSection from '../../components/landing/NewsListSection/NewsListSection'

const Landing = () => {

  return (
    <div className='bg-[#F3F4F6]   dark:bg-[#1E1E1E]'>
      <HeroSection />
      <Section1 />
      <Categories />
      <SliderCourses />
      <WhyUs />
      <SliderTeachers />
      <JoinTeachers />
      <NewsListSection />
    </div>
  )
}

export default Landing;
