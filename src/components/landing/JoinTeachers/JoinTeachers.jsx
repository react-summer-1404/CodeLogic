import React from 'react'
import TextImage from '../../common/TextImage/TextImage'
import Talking from '../../../assets/Images/talking.svg'
import { useTranslation } from 'react-i18next'



const JoinTeachers = () => {

  const {t} = useTranslation();

  return (
    <div className='pt-[202px]'>
      <TextImage title1={t('joinTeachers.title1')}
      titleSpan={t('joinTeachers.titleSpan')} title2={t('joinTeachers.title2')}
      desc={t('joinTeachers.desc')}
      buttonText={t('joinTeachers.buttonText')} img={Talking} bg={'#F3F4F6'}/>
    </div>
  )
}

export default JoinTeachers