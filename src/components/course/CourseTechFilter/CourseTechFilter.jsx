import { useState, useEffect } from 'react'
import Arrow from '../../../assets/Icons/Arrow'
import getCourseTechnologies from '../../../core/services/api/get/getCourseTechnologies'
import { useTranslation } from 'react-i18next'

const CourseTechFilter = ({handleSetTechnologies}) => {

  const {t} = useTranslation()

  const [isOpen, setIsOpen] = useState(false)
  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourseTechnologies()
      setTechnologies(data)
    }
    fetchData()
  }, [])

  
  return (
    <div className='flex flex-col gap-4 w-full p-4 bg-white rounded-[15px] dark:bg-[#454545] md:w-[284px]'>
      <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center w-full text-[#DDDDDD] cursor-pointer'>
        <span className='font-bold text-[18px]'>{t('courseTechFilter.title')}</span>
        <button className={`${isOpen ? 'rotate-90' : 'rotate-270'}`}>
          <Arrow />
        </button>
      </div>
      {isOpen && (
        <div className='flex flex-col gap-4'>
          {technologies.map(item => (
            <label key={item.id} className='flex items-center gap-2'>
              <input
                type='checkbox'
                onChange={() => {handleSetTechnologies(item.techName)}}
                className='w-[26px] h-[26px] rounded-2xl border-gray-300'
              />
              <span className='dark:text-[#CCCCCC]'>{item.techName}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default CourseTechFilter
