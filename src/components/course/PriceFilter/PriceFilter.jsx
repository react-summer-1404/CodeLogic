import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Arrow from '../../../assets/Icons/Arrow'
import { useTranslation } from 'react-i18next';


const PriceFilter = () => {

    const {t} = useTranslation(); 

    const [isOpen, setIsOpen] = useState();

    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className='flex flex-col gap-6 w-full p-4 bg-[#FFFFFF] rounded-[15px] cursor-pointer
        md:w-[284px]'>
            <div onClick={() => {setIsOpen(!isOpen)}} className='flex justify-between items-center w-full'>
                <span className='font-bo ld text-[18px] text-[#1E1E1E]'>{t('priceFilter.title')}</span>
                <button className={`${isOpen ? 'rotate-90' : 'rotate-270'}`}>
                    <Arrow/>
                </button>
            </div>
            {isOpen && 
                <Box sx={{ width: 248, color: 'bg-[#008C78]'}}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={0}
                        max={10000000}
                        sx={{
                            color: '#008C78', 
                            '& .MuiSlider-thumb': {
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: '0 0 0 8px rgba(0, 140, 120, 0.16)', 
                                    backgroundColor: '#008C78', 
                                },
                                '&.Mui-active': {
                                    boxShadow: '0 0 0 14px rgba(0, 140, 120, 0.16)',
                                    backgroundColor: '#008C78', 
                                }
                            },
                        }}
                    />
                </Box>
            }
        </div>
    )
}

export default PriceFilter