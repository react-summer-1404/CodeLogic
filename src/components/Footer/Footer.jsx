import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="w-full px-[7%] py-12 bg-[#008c78] rounded-tl-[50px] rounded-tr-[50px] rounded-bl-0 rounded-br-0 rtl">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between bg-[#006252] p-10 rounded-tl-[30px] rounded-tr-0 rounded-bl-0 rounded-br-[30px] mb-5">
        <div className="w-full md:w-1/2 text-center md:text-right mb-6 md:mb-0">
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            از جدیدترین اخبار و دوره های برنامه نویسی مطلع شوید
          </p>
        </div>

        <div className="w-full md:w-1/2 relative flex flex-col items-center md:items-start">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="شماره تماس خود را وارد کنید"
              className="w-[90%] md:w-[360px] px-4 py-2  rounded-tl-[12px] rounded-tr-0 rounded-bl-0 rounded-br-[12px] bg-white text-[#414141] outline-none"
            />
            <button className="absolute top-0 left-0   bg-[#008c78] text-white px-5 py-2 rounded-tl-[12px] rounded-tr-0 rounded-bl-0 rounded-br-[12px] cursor-pointer">
              ثبت نام
            </button>
          </div>
          <span className="hidden md:block mt-16 text-sm text-[#cccccc] w-full md:w-auto ">
            عضویت در خبرنامه وبسایت برنامه نویسی برای اطلاع از مقالات و دوره ها
            و تخفیف ها
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex-1 min-w-[260px] bg-[#006252] p-10 rounded-tl-[12px] rounded-tr-0 rounded-bl-0 rounded-br-[12px] text-white">
          <h2 className="text-lg font-bold border-b-2 border-[#008c78] pb-2 mb-4">
            تخصص ها
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              HTML & CSS
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              JavaScript
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              React
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              Next.js
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              Node.js
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              REST API
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              Git & GitHub
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[260px] bg-[#006252] p-10 rounded-tl-[12px] rounded-tr-0 rounded-bl-0 rounded-br-[12px] text-white">
          <h2 className="text-lg font-bold border-b-2 border-[#008c78] pb-2 mb-4">
            درباره ما
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              اخبار
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              فرصت‌های شغلی
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              تماس با ما
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              مرکز اعتماد
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              قوانین استفاده
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              سیاست امنیت
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              حریم خصوصی
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[260px] bg-[#006252] p-10 rounded-tl-[12px] rounded-tr-0 rounded-bl-0 rounded-br-[12px] text-white">
          <h2 className="text-lg font-bold border-b-2 border-[#008c78] pb-2 mb-4">
            حوزه های کاربردی
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              فرانت اند
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              بک اند
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              فول استک
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              هوش مصنوعی
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              سئو و بهینه سازی
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              طراحی UI / UX
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              موبایل
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[260px] bg-[#006252] p-10 rounded-tl-[12px] rounded-tr-0 rounded-bl-0 rounded-br-[12px] text-white">
          <h2 className="text-lg font-bold border-b-2 border-[#008c78] pb-2 mb-4">
            آموزش و پشتیبانی
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              رویداد ها
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              پنل کاربری
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              پشتیبانی فنی
            </li>
            <li className="cursor-pointer hover:text-black transition-colors duration-300">
              مقالات آموزشی
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between gap-4">
        <h1 className="text-white font-bold text-center md:text-right text-lg">
          آکادمی بحر
        </h1>
        <span className="text-white text-center md:text-right text-sm">
          . تمام حقوق برای آکادمی بحر محفوظ است
        </span>
        <div className="flex gap-4 text-white">
          <InstagramIcon
            className="cursor-pointer hover:text-black transition-all duration-300"
            sx={{ fontSize: 30 }}
          />
          <FacebookIcon
            className="cursor-pointer hover:text-black transition-all duration-300"
            sx={{ fontSize: 30 }}
          />
          <TwitterIcon
            className="cursor-pointer hover:text-black transition-all duration-300"
            sx={{ fontSize: 30 }}
          />
          <TelegramIcon
            className="cursor-pointer hover:text-black transition-all duration-300"
            sx={{ fontSize: 30 }}
          />
          <WhatsAppIcon
            className="cursor-pointer hover:text-black transition-all duration-300"
            sx={{ fontSize: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
