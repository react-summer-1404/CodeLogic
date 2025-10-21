import React from 'react'

const SliderButtons = ({ sliderRef }) => {
    const scroll = (direction = "left" | "right") => {
        if (sliderRef.current) {
            console.log(sliderRef)
            sliderRef.current.scrollBy({
                left: direction === "left" ? -150 : 150,
                behavior: "smooth"
            })
        }
    }
    return (
        <div className='flex justify-between gap-5 visible md:invisible mx-auto mt-10 md:m-0 w-full ' style={{ direction: "ltr" }} >
            <button onClick={() => scroll("left")} className='cursor-pointer shadow-lg text-center w-[45px] h-[45px] rounded-full bg-[#008C78]  dark:bg-[#ffff] dark:text-[#ffff] text-[#1E1E1E]"} bg-[url(/icons/left.png)] bg-[center_center] bg-no-repeat '></button>
            <button onClick={() => scroll("right")} className='cursor-pointer shadow-lg text-center w-[45px] h-[45px] rounded-full  bg-[#008C78] dark:bg-[#ffff] dark:text-[#ffff] text-[#1E1E1E]"} bg-[url(/icons/right.png)] bg-[center_center] bg-no-repeat '></button>
        </div>
    )
}

export default SliderButtons