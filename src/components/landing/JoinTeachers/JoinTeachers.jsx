import React from 'react'
import TextImage from '../../common/TextImage/TextImage'
import Talking from '../../../assets/Images/talking.svg'

const JoinTeachers = () => {
  return (
    <div className='pt-[202px]'>
      <TextImage title1={'تجربه‌ات رو آموزش بده، تأثیر بذار و با ما'}
      titleSpan={' مسیر حرفه‌ای تازه‌ای '} title2={'رو شروع کن.'}
      desc={'اگه برنامه‌نویسی بلدی و دوست داری دانشت رو به دیگران منتقل کنی، اینجا جاییه که می‌تونی هم آموزش بدی، هم تاثیرگذار باشی و هم درآمد داشته باشی. به جمع مدرسین ما بپیوند و بخشی از آینده‌ی برنامه‌نویسان تازه‌کار باش.'}
      buttonText={'به جمع اساتید بپیوندید'} img={Talking} bg={'#F3F4F6'}/>
    </div>
  )
}

export default JoinTeachers