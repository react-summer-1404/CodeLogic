import React from 'react';
import newsData from '../../common/data/newsListSection/NewsData';
import NewsSection from './NewsSection/NewsSectionTop';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NewsSectionTop from './NewsSection/NewsSectionTop';
import NewsSectionBottom from './NewsSection/NewsSectionBottom';

const NewsListSection = () => {
    const { t } = useTranslation();

    return (
        <div className="overflow-x-hidden bg-[#F3F4F6] flex flex-col justify-center items-center gap-29 w-full px-8 py-16   dark:bg-[#1E1E1E]">
            <div className="flex flex-col justify-center items-center gap-7">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-3"
                >
                    <h2 className="font-bold text-[32px] dark:text-[#008C78] text-[#008C78] ">
                        {t('newsListSection.title')}
                    </h2>
                    <p className="text-[24px] text-[#353535]   dark:text-[#DDDDDD]">
                        {t('newsListSection.desc')}
                    </p>
                </motion.div>
                <div className="flex flex-col justify-center items-center gap-7 ">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-7">
                        {newsData.slice(0, 2).map((card, index) => {
                            return <NewsSectionTop card={card} key={index} />;
                        })}
                    </div>
                    <div className="flex flex-col  md:flex-row justify-between items-center gap-7">
                        {newsData.slice(2).map((card) => (
                            <NewsSectionBottom key={card.id} card={card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsListSection;
