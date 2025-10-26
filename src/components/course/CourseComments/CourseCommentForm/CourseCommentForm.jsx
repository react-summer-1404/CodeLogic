import React from 'react'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik';


const CourseCommentForm = () => {

    const {t} = useTranslation();

  return (
    <Formik>
        <Form className='flex flex-col gap-6 
        md:w-[336px]
        lg:w-[823px]'>
            <div className='flex flex-col gap-4'>
                <label className='font-bold text-base text-[#1E1E1E]
                dark:text-[#CCCCCC]'>{t('courseCommentForm.titleInputsTitle')}</label>
                <Field type="text" placeholder={t('courseCommentForm.titleInputsPlcholder')} className='py-4 font-regular text-base 
                text-[#848484] indent-4 bg-[#F3F4F6] rounded-[25px] outline-0'/>
            </div>
            <div className='flex flex-col gap-4'>
                <label className='font-bold text-base text-[#1E1E1E]
                dark:text-[#CCCCCC]'>{t('courseCommentForm.textInputsTitle')}</label>
                <Field type="text" placeholder={t('courseCommentForm.textInputsPlcholder')} className='py-4 font-regular text-base 
                text-[#848484] indent-4 bg-[#F3F4F6] rounded-[25px] outline-0'/>
            </div>
            <button className='py-2 px-4 text-[#FFFFFF] bg-[#008C78] rounded-3xl'>{t('courseCommentForm.send')}</button>
        </Form>
    </Formik>
  )
}

export default CourseCommentForm