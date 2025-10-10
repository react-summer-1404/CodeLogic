import React from 'react'
import CircleTick from '../../../assets/Icons/CircleTick'
import { useTranslation } from 'react-i18next'

const WhyUsItem = ({item}) => {

  const {t} = useTranslation();  
  
  return (
    <div>
      <CircleTick/>
      <div>
        <span>{t(`${item.title}`)}</span>
        <p></p>
      </div>
    </div>
  )
}

export default WhyUsItem