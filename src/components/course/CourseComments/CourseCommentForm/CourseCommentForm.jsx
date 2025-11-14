import React from 'react'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik';
import { addCommentCourses } from '../../../../core/services/api/post/addCommentCourses';



const CourseCommentForm = ({course}) => {

    const {t} = useTranslation();

    const fieldClass = 
    'py-4 font-regular text-base text-[#848484] indent-4 bg-[#F3F4F6] rounded-[25px] outline-0 dark:bg-[#1E1E1E]'

    const onSubmit = async (values, { resetForm }) => {
      await addCommentCourses(course.courseId ,values.title, values.describe)
       resetForm()
    }


  return (
    <Formik initialValues={{ title: '', describe: '' }} onSubmit={onSubmit}>
        <Form className='flex flex-col gap-6 
        md:w-[336px]
        lg:w-[823px]'>
            <div className='flex flex-col gap-4'>
                <label className='font-bold text-base text-[#1E1E1E]
                dark:text-[#CCCCCC]'>{t('courseCommentForm.titleInputsTitle')}</label>
                <Field name='title' type="text" placeholder={t('courseCommentForm.titleInputsPlcholder')} className={fieldClass}/>
            </div>
            <div className='flex flex-col gap-4'>
                <label className='font-bold text-base text-[#1E1E1E]
                dark:text-[#CCCCCC]'>{t('courseCommentForm.textInputsTitle')}</label>
                <Field name='describe' type="text" placeholder={t('courseCommentForm.textInputsPlcholder')} className={fieldClass}/>
            </div>
            <button 
            type='submit'
            className='py-2 px-4 text-[#FFFFFF] bg-[#008C78] rounded-3xl cursor-pointer
            active:brightness-80'>
                {t('courseCommentForm.send')}
            </button>
        </Form>
    </Formik>
  )
}

export default CourseCommentForm