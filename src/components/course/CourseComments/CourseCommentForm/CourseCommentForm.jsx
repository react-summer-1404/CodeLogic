import React from 'react'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik';


const CourseCommentForm = () => {

    const {t} = useTranslation();

  return (
    <Formik>
        <Form className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
                <label>{t('عنوان دیدگاه')}</label>
                <Field type="text" placeholder='عنوان دیدگاه خود را بنویسید' className='w-[823px] py-4 font-regular text-base 
                text-[#848484] indent-4 bg-[#F3F4F6] rounded-[25px] outline-0'/>
            </div>
            <div className='flex flex-col gap-4'>
                <label>{t('متن دیدگاه')}</label>
                <Field type="text" placeholder='متن دیدگاه خود را بنویسید' className='w-[823px] py-4 font-regular text-base 
                text-[#848484] indent-4 bg-[#F3F4F6] rounded-[25px] outline-0'/>
            </div>
            <button className='py-2 px-4 text-[#FFFFFF] bg-[#008C78] rounded-3xl'>{t('ارسال')}</button>
        </Form>
    </Formik>
  )
}

export default CourseCommentForm