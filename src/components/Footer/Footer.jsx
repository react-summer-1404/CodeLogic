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
      <div className={` ${style.top} `}></div>
      <div className={` ${style.middle} `}></div>
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
