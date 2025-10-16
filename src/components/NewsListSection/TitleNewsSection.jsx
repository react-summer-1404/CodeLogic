import React from 'react'
import Talking from '../../assets/Images/Talking.png'
import { motion } from 'framer-motion'
const TitleNewsSection = () => {

    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", type: "spring", stiffness: 300, delay: 0.3 }}
        >
            <TextImage title1={'تجربه‌ات رو آموزش بده، تأثیر بذار و با ما'} titleSpan={' مسیر حرفه‌ای تازه‌ای '}
                title2={'رو شروع کن.'}
                desc={'اگه برنامه‌نویسی بلدی و دوست داری دانشت رو به دیگران منتقل کنی، اینجا جاییه که می‌تونی هم آموزش بدی، هم تاثیرگذار باشی و هم درآمد داشته باشی. به جمع مدرسین ما بپیوند و بخشی از آینده‌ی برنامه‌نویسان تازه‌کار باش.'}
                buttonText={'به جمع اساتید بپیوندید'} img={Talking} bg={'#EEFFFC'} />
        </motion.div>
    )
}

export default TitleNewsSection