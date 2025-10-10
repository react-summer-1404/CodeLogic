import React from "react";
import style from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const Footer = () => {
  return (
    <div
      className={`${style.main} w-full px-[7%] py-12 rounded-t-[50px] bg-[#008c78]`}
    >
      <div
        className={`${style.top} flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between bg-[#006252] p-10 rounded-[30px_0] mb-5`}
      >
        <div
          className={`${style.left} w-full sm:w-full md:w-1/2 lg:w-1/2 relative h-full mb-6 md:mb-0`}
        >
          <button className={`${style.button} rounded-4xl`}>ثبت نام</button>

          <input
            type="text"
            placeholder="شماره تماس خود را وارد کنید"
            className={`${style.input} rounded-4xl mx-auto md:mx-0`}
          />
          <span className={`${style.inputspan} hidden md:block`}>
            عضویت در خبرنامه وبسایت برنامه نویسی برای اطلاع از مقالات و دوره ها
            و تخفیف ها
          </span>
        </div>

        <div
          className={`${style.right} w-full sm:w-full md:w-1/2 lg:w-1/2 text-center md:text-right`}
        >
          <p
            className={`${style.p} text-2xl sm:text-2xl md:text-4xl font-bold`}
          >
            {" "}
            از جدیدترین اخبار و دوره های برنامه نویسی مطلع شوید
          </p>
        </div>
      </div>

      <div
        className={`${style.middle} flex flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap items-start justify-between gap-6 mb-8`}
      >
        <div
          className={`${style.card1} w-full sm:w-[48%] md:w-[23%] lg:w-[23%]`}
        >
          <h2 className={`${style.h2} text-lg font-bold`}>آموزش و پشتیبانی</h2>
          <ul className="space-y-2 mt-3 text-sm">
            <li className={`${style.li}`}>رویداد ها </li>
            <li className={`${style.li}`}>پنل کاربری </li>
            <li className={`${style.li}`}>پشتیبانی فنی </li>
            <li className={`${style.li}`}>مقالات آموزشی </li>
          </ul>
        </div>

        <div
          className={`${style.card} w-full sm:w-[48%] md:w-[23%] lg:w-[23%]`}
        >
          <h2 className={`${style.h2} text-lg font-bold`}>حوزه های کاربردی</h2>
          <ul className="space-y-2 mt-3 text-sm">
            <li className={`${style.li}`}>فرانت اند</li>
            <li className={`${style.li}`}>بک اند </li>
            <li className={`${style.li}`}>فول استک </li>
            <li className={`${style.li}`}>هوش مصنوعی </li>
            <li className={`${style.li}`}>سئو و بهینه سازی </li>
            <li className={`${style.li}`}>طراحی UI / UX </li>
            <li className={`${style.li}`}>موبایل </li>
          </ul>
        </div>

        <div
          className={`${style.card} w-full sm:w-[48%] md:w-[23%] lg:w-[23%]`}
        >
          <h2 className={`${style.h2} text-lg font-bold`}>درباره ما</h2>
          <ul className="space-y-2 mt-3 text-sm">
            <li className={`${style.li}`}>اخبار</li>
            <li className={`${style.li}`}>فرصت‌های شغلی</li>
            <li className={`${style.li}`}>تماس با ما</li>
            <li className={`${style.li}`}>مرکز اعتماد</li>
            <li className={`${style.li}`}>قوانین استفاده</li>
            <li className={`${style.li}`}>سیاست امنیت</li>
            <li className={`${style.li}`}>حریم خصوصی</li>
          </ul>
        </div>

        <div
          className={`${style.card} w-full sm:w-[48%] md:w-[23%] lg:w-[23%]`}
        >
          <h2 className={`${style.h2} text-lg font-bold`}>تخصص ها</h2>
          <ul className="space-y-2 mt-3 text-sm">
            <li className={`${style.li}`}>HTML & CSS</li>
            <li className={`${style.li}`}>JavaScript </li>
            <li className={`${style.li}`}>React </li>
            <li className={`${style.li}`}>Next.js </li>
            <li className={`${style.li}`}>Node.js </li>
            <li className={`${style.li}`}>REST API </li>
            <li className={`${style.li}`}>Git & GitHub </li>
          </ul>
        </div>
      </div>

      <div
        className={`${style.bottom} flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between gap-4`}
      >
        <div className={`${style.icon} flex gap-4 text-white`}>
          <InstagramIcon
            sx={{
              cursor: "pointer",
              fontSize: 30,
              transition: "0.3s ease",
              "&:hover": { color: "black" },
            }}
          />
          <FacebookIcon
            sx={{
              cursor: "pointer",
              fontSize: 30,
              transition: "0.3s ease",
              "&:hover": { color: "black" },
            }}
          />
          <TwitterIcon
            sx={{
              cursor: "pointer",
              fontSize: 30,
              transition: "0.3s ease",
              "&:hover": { color: "black" },
            }}
          />
          <TelegramIcon
            sx={{
              cursor: "pointer",
              fontSize: 30,
              transition: "0.3s ease",
              "&:hover": { color: "black" },
            }}
          />
          <WhatsAppIcon
            sx={{
              cursor: "pointer",
              fontSize: 30,
              transition: "0.3s ease",
              "&:hover": { color: "black" },
            }}
          />
        </div>

        <span
          className={`${style.span} text-center sm:text-center md:text-right`}
        >
          {" "}
          . تمام حقوق برای آکادمی بحر محفوظ است
        </span>

        <h1 className={`${style.h1} text-center sm:text-center md:text-right`}>
          آکادمی بحر
        </h1>
      </div>
    </div>
  );
};

export default Footer;
