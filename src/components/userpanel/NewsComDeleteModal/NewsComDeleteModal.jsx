import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {useQueryClient} from '@tanstack/react-query'


const NewsComDeleteModal = ({handleToggleDeleteModal, handleDeleteNewsCom}) => {

    const {t} = useTranslation()

    const Animate = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 0.35 },
        },
    };

    const queryClient = useQueryClient()
    const onDeleteNewsCom = async () => {
        await handleDeleteNewsCom() 
        queryClient.invalidateQueries({predicate: q => q.queryKey[0] === 'MYNEWSCOMMENTS'})
        handleToggleDeleteModal(false)
    }
    

    return (

        <div onClick={() => {handleToggleDeleteModal(false)}} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40">
            <motion.div 
            variants={Animate}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col justify-between items-center gap-6 w-144 h-84 py-8 bg-[#FFFFFF] border border-[#EAEAEA] 
            rounded-xl fixed top-32 right-120 inset-0 z-48">
                <h3>{t('courseComDeleteModal.title')}</h3>
                <div className='flex gap-2'>
                    <button onClick={() => {handleToggleDeleteModal(false)}} className='py-2 px-4 border rounded-lg cursor-pointer'>
                        {t('courseComDeleteModal.closeModalBtn')}
                    </button>
                    <button 
                    onClick={onDeleteNewsCom}
                    className='py-2 px-4 text-[#FFFFFF] bg-[#EB0007] rounded-lg cursor-pointer'>
                        {t('courseComDeleteModal.deleteBtn')}
                    </button>
                </div>
            </motion.div>
        </div>
  )
}

export default NewsComDeleteModal