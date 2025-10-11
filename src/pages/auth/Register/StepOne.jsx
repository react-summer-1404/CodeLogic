import React from "react";
import regone from "../../../assets/Images/regone.svg";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const StepOne = () => {
  return (
    <div className="flex justify-center items-center  bg-[#EAEAEA]">
      <div className="flex w-[86.78%] h-[577px] bg-white rounded-4xl shadow-md overflow-hidden">
        <div className="w-[47.44%] flex justify-center items-center bg-[white]">
          <div className="w-[100%] h-[95.67%] bg-[#EEFFFC] rounded-xl flex flex-col justify-center items-center mr-2  ">
            <img className="w-[68.16%] h-[52.63%] mb-10 " src={regone} />
            <span className="text-[#005B77] font-bold text-2xl mb-10">
              شروع سفر یادگیری شما از همین‌جاست!
            </span>
            <p className="w-[80%] text-[#1E1E1E] ">
              {" "}
              با ساخت حساب کاربری‌تان، به محتوای آموزشی، دوره‌ها و ابزارهای
              پیشرفته دسترسی خواهید داشت. اولین قدم برای رشد و پیشرفت همین‌جاست!
            </p>
          </div>
        </div>
        <div className="w-[52.56%] flex flex-col justify-center px-[5%] bg-[white] relative ">
          <div>
            <div className="   mb-6  text-sm absolute top-10 right-30 ">
              <HomeIcon className="text-[#005B77] ml-2" />
              <span className="text-[#005B77] font-bold ">صفحه اصلی</span>
            </div>

            <h2 className="text-2xl text-center font-bold text-[#008C78] mb-3 ">
              ایجاد حساب کاربری
            </h2>
            <p className="text-[#333333] mb-8  text-center">
              وارد کردن شماره تماس برای ایجاد حساب کاربری
            </p>

            <div className="flex flex-col items-center relative ">
              <PhoneIphoneIcon className="absolute top-3 right-20  text-[grey]" />
              <input
                type="text"
                placeholder="شماره تماس خود را وارد کنید"
                className=" rounded-4xl py-3 px-16 text-[#383838] bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#008C78] mb-6 w-[80%]"
              />

              <button className="bg-[#008C78] text-white font-semibold py-3 rounded-4xl hover:bg-[#007563] transition-colors cursor-pointer w-[80%]">
                ارسال کد یکبار مصرف
              </button>
            </div>

            <p className="text-[#333333] text-sm mt-6  text-center">
              حساب کاربری دارید؟{" "}
              <span className="text-[#008C78] font-semibold cursor-pointer hover:underline ">
                وارد شوید
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
