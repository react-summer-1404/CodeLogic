import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={` ${style.main} `}>
      <div className={` ${style.top} `}></div>
      <div className={` ${style.middle} `}></div>
      <div className={` ${style.bottom} `}></div>
    </div>
  );
};

export default Footer;
