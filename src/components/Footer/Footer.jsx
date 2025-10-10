import React from "react";
import style from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className={` ${style.main} `}>
      <div className={` ${style.top} flex items-center justify-between `}>
        <div className={` ${style.left}   `}>
          <button className={` ${style.button} rounded-4xl `}>ثبت نام</button>

          <input
            type="text"
            placeholder="شماره تماس خود را وارد کنید"
            className={` ${style.input} rounded-4xl `}
          />
          <span className={` ${style.inputspan} `}>
            {" "}
            عضویت در خبرنامه وبسایت برنامه نویسی برای اطلاع از مقالات و دوره ها
            و تخفیف ها{" "}
          </span>
        </div>
        <div className={` ${style.right} `}>
          <p className={` ${style.p} text-4xl font-bold `}>
            {" "}
            از جدیدترین اخبار و دوره های برنامه نویسی مطلع شوید
          </p>
        </div>
      </div>
      <div className={` ${style.middle} flex items-center justify-between  `}>
        <div className={` ${style.card1} `}>
          {" "}
          <h2 className={` ${style.h2}  text-lg font-bold   `}>
            آموزش و پشتیبانی
          </h2>
          <ul class="space-y-2 mt-3 text-sm">
            <li className={` ${style.li}  `}>رویداد ها </li>
            <li className={` ${style.li}  `}>پنل کاربری </li>
            <li className={` ${style.li}  `}>پشتیبانی فنی </li>
            <li className={` ${style.li}  `}>مقالات آموزشی </li>
          </ul>
        </div>
        <div className={` ${style.card} `}>
          {" "}
          <h2 className={` ${style.h2}  text-lg font-bold   `}>
            حوزه های کاربردی{" "}
          </h2>
          <ul class="space-y-2 mt-3 text-sm">
            <li className={` ${style.li}  `}>فرانت اند</li>
            <li className={` ${style.li}  `}>بک اند </li>
            <li className={` ${style.li}  `}>فول استک </li>
            <li className={` ${style.li}  `}>هوش مصنوعی </li>
            <li className={` ${style.li}  `}>سئو و بهینه سازی </li>
            <li className={` ${style.li}  `}>طراحی UI / UX </li>
            <li className={` ${style.li}  `}>موبایل </li>
          </ul>
        </div>
        <div className={` ${style.card} `}>
          {" "}
          <h2 className={` ${style.h2}  text-lg font-bold   `}>درباره ما</h2>
          <ul class="space-y-2 mt-3 text-sm">
            <li className={` ${style.li}  `}>اخبار</li>
            <li className={` ${style.li}  `}>فرصت‌های شغلی</li>
            <li className={` ${style.li}  `}>تماس با ما</li>
            <li className={` ${style.li}  `}>مرکز اعتماد</li>
            <li className={` ${style.li}  `}>قوانین استفاده</li>
            <li className={` ${style.li}  `}>سیاست امنیت</li>
            <li className={` ${style.li}  `}>حریم خصوصی</li>
          </ul>
        </div>
        <div className={` ${style.card} `}>
          {" "}
          <h2 className={` ${style.h2}  text-lg font-bold   `}>تخصص ها </h2>
          <ul class="space-y-2 mt-3 text-sm">
            <li className={` ${style.li}  `}>HTML & CSS</li>
            <li className={` ${style.li}  `}>JavaScript </li>
            <li className={` ${style.li}  `}>React </li>
            <li className={` ${style.li}  `}>Next.js </li>
            <li className={` ${style.li}  `}>Node.js </li>
            <li className={` ${style.li}  `}>REST API </li>
            <li className={` ${style.li}  `}>Git & GitHub </li>
          </ul>
        </div>
      </div>
      <div className={` ${style.bottom} flex items-center justify-between `}>
        <div className={` ${style.icon} `}>
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
        <span className={` ${style.span}  `}>
          {" "}
          . تمام حقوق برای آکادمی بحر محفوظ است
        </span>

        <h1 className={` ${style.h1}  `}>آکادمی بحر</h1>
      </div>
    </div>
  );
};

export default Footer;
