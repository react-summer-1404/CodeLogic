// import React, { useMemo } from "react";
// import DashboardCourseReserve from "../../components/userpanel/DashboardCourseReserve/DashboardCourseReserve";
// import DashboardLatestNews from "../../components/userpanel/DashboardLatestNews/DashboardLatestNews";
// import NorthWestIcon from "@mui/icons-material/NorthWest";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import img1 from "../../assets/Images/Rectanglepc.png";
// import { useQuery } from "@tanstack/react-query";
// import getAllNews from "../../core/services/api/Get/News";
// import img2 from "../../assets/Images/HTML5Course.png";
// import { Link } from "react-router-dom";
// import GetProfileInfo from "../../core/services/api/Get/GetProfileInfo";

// const courseData = [
//   {
//     image: img1,
//     title: "دوره آموزش جامع HTML5",
//     status: "رزرو شده",
//   },
//   {
//     image: img1,
//     title: " آموزش تبدیل گفتار به نوشتار با پایتون  ",
//     status: "در انتظار تایید ",
//   },
//   {
//     image: img1,
//     title: " دوره اتصال React به PHP به همراه 3 پروژه عملی  ",
//     status: " در انتظار تایید",
//   },
// ];

// const headerVariants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//       delay: 0.2,
//       when: "beforeChildren",
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   initial: { opacity: 0, y: -20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
// };

// const UserPanelDashboard = () => {
//   const { data } = useQuery({
//     queryKey: "getallnews",
//     queryFn: getAllNews,
//   });

//   const sortedNews = useMemo(() => {
//     if (!data?.news) return [];
//     return [...data.news]
//       .sort((a, b) => new Date(b.insertDate) - new Date(a.insertDate))
//       .slice(0, 3);
//   }, [data]);

//   const { t, i18n } = useTranslation();
//   const isRtl = i18n.language === "fa";

//   const { data: profileData } = useQuery({
//     queryKey: ["profileInfo"],
//     queryFn: async () => {
//       const res = await GetProfileInfo();
//       return res?.data ?? res;
//     },
//   });

//   const profileFields = [
//     profileData?.fName,
//     profileData?.lName,
//     profileData?.nationalCode,
//     profileData?.gender,
//     profileData?.birthDay,
//     profileData?.phoneNumber,
//     profileData?.userAbout,
//     profileData?.homeAdderess,
//     profileData?.latitude,
//     profileData?.longitude,
//     profileData?.linkdinProfile,
//     profileData?.telegramLink,
//     profileData?.email,
//     profileData?.currentPictureAddress,
//   ];

//   const filledFieldsCount = profileFields.filter(
//     (field) => field !== undefined && field !== null && field !== ""
//   ).length;

//   const percentage = Math.round(
//     (filledFieldsCount / profileFields.length) * 100
//   );

//   return (
//     <div className=" w-full bg-[#F3F4F6] mt-5 md:m-0 md:h-[85%] flex items-center rounded-4xl p-5 dark:bg-[#333] ">
//       <div className=" w-full h-full flex flex-col justify-between ">
//         <div className=" w-full h-[25%] flex flex-col gap-5 md:flex-row md:justify-between">
//           <motion.div
//             variants={headerVariants}
//             initial="initial"
//             animate="animate"
//             className=" h-full md:w-[30%] rounded-3xl bg-white dark:bg-[#454545]"
//           >
//             <motion.div
//               variants={itemVariants}
//               className={` flex justify-between items-center  w-[55%] py-4 pr-6 ${
//                 isRtl ? "" : "pl-6 w-[65%]"
//               }`}
//             >
//               <p className="text-[20px] text-[#1e1e1e] dark:text-[#848484] ">
//                 {t("paneldashboard.my_courses_title")}
//               </p>
//               <div className="p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484]">
//                 <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
//               </div>
//             </motion.div>

//             <motion.sp
//               variants={itemVariants}
//               className={` text-[#008C78] text-[48px] pr-6 ${
//                 isRtl ? "" : "pl-6"
//               } `}
//             >
//               5
//             </motion.sp>
//           </motion.div>
//           <motion.div
//             variants={headerVariants}
//             initial="initial"
//             animate="animate"
//             className=" h-full md:w-[30%] rounded-3xl bg-white dark:bg-[#454545]"
//           >
//             <motion.div
//               variants={itemVariants}
//               className={`flex justify-between items-center  w-[85%] py-4 pr-6  ${
//                 isRtl ? "" : "pl-6 w-[90%]"
//               } `}
//             >
//               <p className="text-[20px] text-[#1e1e1e] dark:text-[#848484] ">
//                 {t("paneldashboard.unpaid_periods")}
//               </p>
//               <div className="p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484]">
//                 <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
//               </div>
//             </motion.div>

//             <motion.span
//               variants={itemVariants}
//               className={` text-[#008C78] text-[48px] pr-6 ${
//                 isRtl ? "" : "pl-6"
//               } `}
//             >
//               12
//             </motion.span>
//           </motion.div>

//           <motion.div
//             variants={headerVariants}
//             initial="initial"
//             animate="animate"
//             className=" h-full md:w-[35%] rounded-3xl bg-white dark:bg-[#454545] relative"
//           >
//             <motion.div
//               variants={headerVariants}
//               className={` flex justify-between items-center  w-[65%] py-4 pr-6 ${
//                 isRtl ? "" : "pl-6 w-[70%]"
//               } `}
//             >
//               <p className="text-[20px] text-[#1e1e1e] dark:text-[#848484] ">
//                 {t("paneldashboard.profile_completed")}
//               </p>
//               <div className="p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484]">
//                 <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
//               </div>
//             </motion.div>
// <<<<<<< HEAD
//             <motion.div
//               variants={headerVariants}
//               className={` rounded-full border-7 border-[#008c78] w-20 mx-auto mb-2 md:mb-0 h-20 md:w-[21%] md:h-[54%] flex flex-col items-center
//                  justify-center md:mr-65 md:absolute md:top-10 ${
//                    isRtl ? "" : "md:ml-65"
//                  } `}
// =======

//             <div
//               className={`absolute top-10 w-[21%] h-[54%] flex items-center justify-center rounded-full ${
//                 isRtl ? "mr-65" : "ml-65"
//               }`}
// >>>>>>> feature/panel/dashboard
//             >
//               <svg
//                 width="100%"
//                 height="100%"
//                 viewBox="0 0 100 100"
//                 className="rotate-[-90deg]"
//               >
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="46"
//                   stroke="#e5e5e5"
//                   strokeWidth="7"
//                   fill="transparent"
//                 />

//                 <motion.circle
//                   cx="50"
//                   cy="50"
//                   r="46"
//                   stroke="#008c78"
//                   strokeWidth="7"
//                   fill="transparent"
//                   strokeDasharray={2 * Math.PI * 46}
//                   strokeDashoffset={2 * Math.PI * 46 * (1 - percentage / 100)}
//                   strokeLinecap="round"
//                   initial={{ strokeDashoffset: 2 * Math.PI * 46 }}
//                   animate={{
//                     strokeDashoffset: 2 * Math.PI * 46 * (1 - percentage / 100),
//                   }}
//                   transition={{ duration: 0.5 }}
//                 />
//               </svg>

//               <p className="absolute text-[#008c78] font-bold">{percentage}%</p>
//             </div>
//           </motion.div>
//         </div>
//         <div className=" w-full md:h-[70%]  flex flex-col md:flex-row md:justify-between">
//           <motion.div
//             variants={headerVariants}
//             initial="initial"
//             animate="animate"
//             className=" h-full mt-5 py-4 md:m-0 md:p-0 md:w-[49%] bg-[white]  rounded-3xl dark:bg-[#454545]  "
//           >
//             <motion.div
//               variants={itemVariants}
//               className={` flex justify-between items-center   md:w-[45%] px-6 py-4 md:pr-6 ${
//                 isRtl ? "" : "md:pl-6 md:w-[65%]"
//               }`}
//             >
//               <p
//                 className={` text-[20px] text-[#1e1e1e] dark:text-[#848484] ${
//                   isRtl ? "" : "w-[100%]   "
//                 } `}
//               >
//                 {t("paneldashboard.reserved_courses")}
//               </p>
//               <div
//                 className={` p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484] ${
//                   isRtl ? "" : "mr-20"
//                 } `}
//               >
//                 <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
//               </div>
//             </motion.div>

//             {courseData.map((item, index) => {
//               const shortTitle =
//                 item.title.length > 48
//                   ? item.title.slice(0, 48) + "…"
//                   : item.title;

//               return (
//                 <DashboardCourseReserve
//                   key={index}
//                   image={item.image}
//                   title={shortTitle}
//                   status={item.status}
//                 />
//               );
//             })}
//             <Link to="/userPanel/myReservedCourses">
//               <motion.p
//                 variants={itemVariants}
//                 className="text-[16px] text-[#848484] text-center cursor-pointer  "
//               >
//                 {t("paneldashboard.view_all")}
//               </motion.p>
//             </Link>
//           </motion.div>
//           <motion.div
//             variants={headerVariants}
//             initial="initial"
//             animate="animate"
//             className="h-full mt-5 py-4 md:m-0 md:p-0 md:w-[49%] bg-[white]  rounded-3xl dark:bg-[#454545] "
//           >
//             <motion.div
//               variants={itemVariants}
//               className={` flex justify-between items-center   md:w-[45%] py-4 pr-6 ${
//                 isRtl ? "" : "pl-6 md:w-[65%]"
//               }`}
//             >
//               <p
//                 className={`  text-[20px] text-[#1e1e1e] dark:text-[#848484] ${
//                   isRtl ? "" : "md:w-[40%]   "
//                 } `}
//               >
//                 {t("paneldashboard.latest_news")}
//               </p>
//               <div
//                 className={` p-1 border-2 border-[#1E1E1E] rounded-full dark:border-[#848484] ${
//                   isRtl ? "ml-5" : "mr-30"
//                 } `}
//               >
//                 <NorthWestIcon className="text-[#1e1e1e] dark:text-[#848484]" />
//               </div>
//             </motion.div>

//             {sortedNews.map((item) => {
//               const shortTitle =
//                 item.title.length > 48
//                   ? item.title.slice(0, 48) + "…"
//                   : item.title;

//               return (
//                 <DashboardLatestNews
//                   id={item.id}
//                   image={
//                     item.currentImageAddress &&
//                     !item.currentImageAddress.includes("undefined")
//                       ? item.currentImageAddress
//                       : img2
//                   }
//                   title={shortTitle}
//                   date={new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   }).format(new Date(item.insertDate))}
//                 />
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPanelDashboard;
import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
// import img1 from "../../assets/Images/userinfo2.jpg";
import { Field, Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PanelImageModal from "../../components/userpanel/PanelImageModal/PanelImageModal";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import GetProfileInfo from "../../core/services/api/Get/GetProfileInfo";
import { UpdateProfileInfo } from "../../core/services/api/put/UpdateProfileInfo";
import { toast } from "react-toastify";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LocationMarker = ({ lat, lng, setAddress, setLat, setLng }) => {
  const map = useMap();

  const [position, setPosition] = useState({
    lat: lat || 35.6892,
    lng: lng || 51.389,
  });

  useEffect(() => {
    if (lat && lng) {
      const newPos = { lat: parseFloat(lat), lng: parseFloat(lng) };
      setPosition(newPos);
      map.flyTo(newPos, 15);
    }
  }, [lat, lng, map]);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      handleChange({ lat, lng });
    },
  });

  const handleChange = async ({ lat, lng }) => {
    setPosition({ lat, lng });
    setLat(lat);
    setLng(lng);

    try {
      const res = await fetch(
        `  https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=fa  `
      );
      const data = await res.json();

      if (data && data.address) {
        const addr = data.address;

        const preferredOrder = [
          "state",
          "county",
          "city",
          "city_district",
          "suburb",
          "neighbourhood",
          "village",
          "road",
          "house_number",
        ];

        const pieces = [];

        for (const key of preferredOrder) {
          if (addr[key]) {
            const val = String(addr[key]).trim();

            if (key === "city_district") {
              const hasPersian = /[\u0600-\u06FF]/.test(val);
              pieces.push(hasPersian ? val : `منطقه ${val}`);
            } else if (key === "state") {
              const hasPersian = /[\u0600-\u06FF]/.test(val);
              pieces.push(hasPersian ? val : `استان ${val}`);
            } else {
              pieces.push(val);
            }
          }
        }

        if (pieces.length === 0 && data.display_name) {
          const parts = data.display_name
            .split(",")
            .map((p) => p.trim())
            .filter(Boolean);
          const reversed = parts.reverse();
          setAddress(reversed.join(" - "));
          return;
        }

        const finalAddress = pieces.join(" - ");
        setAddress(finalAddress);
        return;
      }

      if (data && data.display_name) {
        const parts = data.display_name
          .split(",")
          .map((p) => p.trim())
          .filter(Boolean);
        const reversed = parts.reverse();
        setAddress(reversed.join(" - "));
      }
    } catch (err) {
      console.error("Error fetching address:", err);
    }
  };

  return (
    <Marker
      position={position}
      draggable={true}
      eventHandlers={{
        dragend: (e) => {
          const lat = e.target.getLatLng().lat;
          const lng = e.target.getLatLng().lng;
          handleChange({ lat, lng });
        },
      }}
    />
  );
};

const UserPanelUserInfo = () => {
  const { data: profileData } = useQuery({
    queryKey: ["profileInfo"],
    queryFn: async () => {
      const res = await GetProfileInfo();
      return res?.data ?? res;
    },
  });
  const ph = (field, fallback = "") => {
    if (!profileData) return fallback;
    const d = profileData;

    const map = {
      name: d.fName,
      lastname: d.lName,
      nationalcode: d.nationalCode,
      phonenumber: d.phoneNumber,
      birthday: d.birthDay?.split("T")[0],
      aboutme: d.userAbout,
      gender: d.gender,
      adress: d.homeAdderess,
      email: d.email,
      telegram: d.telegramLink,
      linkdin: d.linkdinProfile,
    };

    return map[field] || fallback;
  };

  const [openModal, setOpenModal] = useState(false);
  const [profileImage, setProfileImage] = useState(
    profileData?.currentPictureAddress
  );

  useEffect(() => {
    if (profileData && profileData.currentPictureAddress) {
      setProfileImage(profileData.currentPictureAddress);
    }
  }, [profileData]);

  const [activeTab, setActiveTab] = useState("general");

  const containerVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const queryClient = useQueryClient();

  const updateProfileMutation = useMutation({
    mutationFn: UpdateProfileInfo,
    onSuccess: () => {
      toast.success("ویرایش پروفایل با موفقیت انجام شد");
      queryClient.invalidateQueries(["profileInfo"]);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  const birthdayPlaceholder = profileData?.birthDay
    ? new DateObject({
        date: new Date(profileData.birthDay),
        calendar: persian,
        locale: persian_fa,
      }).format("YYYY/MM/DD")
    : ph("birthday");

  const apiImagesData = profileData?.userImage || [];
  const currentProfileUrl = profileData?.currentPictureAddress;
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="w-full bg-[#F3F4F6] h-[85%] flex items-center rounded-4xl p-5 dark:bg-[#333]"
    >
      <div className="w-full h-full">
        <div className="w-full">
          <motion.button
            variants={itemVariants}
            onClick={() => setActiveTab("general")}
            className={`cursor-pointer text-[16px] transition-all duration-300 rounded-xl py-2 px-2 border-1 ${
              activeTab === "general"
                ? "text-[white] bg-[#008C78] border-none"
                : "text-[#848484] border-[#848484]"
            }`}
          >
            {t("userinfo.tabs.general")}
          </motion.button>
          <motion.button
            variants={itemVariants}
            onClick={() => setActiveTab("location")}
            className={`cursor-pointer text-[16px] transition-all duration-300 rounded-xl py-2 px-2 border-1 ${
              activeTab === "location"
                ? "text-[white] bg-[#008C78] border-none"
                : "border-[#848484] text-[#848484]"
            } ${isRtl ? "mr-5" : "ml-5"}`}
          >
            {t("userinfo.tabs.location")}
          </motion.button>
          <motion.button
            variants={itemVariants}
            onClick={() => setActiveTab("social")}
            className={`mr-5 cursor-pointer text-[16px] transition-all duration-300 rounded-xl py-2 px-2 border-1 ${
              activeTab === "social"
                ? "text-[white] bg-[#008C78] border-none"
                : "border-[#848484] text-[#848484]"
            } ${isRtl ? "mr-5" : "ml-5"}`}
          >
            {t("userinfo.tabs.social")}
          </motion.button>
        </div>

        <Formik
          enableReinitialize={true}
          initialValues={{
            name: profileData?.fName,
            lastname: profileData?.lName,
            nationalcode: profileData?.nationalCode,
            gender:
              profileData?.gender === true
                ? "male"
                : profileData?.gender === false
                ? "female"
                : "",
            birthday: profileData?.birthDay,
            phonenumber: profileData?.phoneNumber,
            aboutme: profileData?.userAbout,
            adress: profileData?.homeAdderess,
            lat: profileData?.latitude,
            lng: profileData?.longitude,
            email: profileData?.email,
            telegram: profileData?.telegramLink,
            linkdin: profileData?.linkdinProfile,
          }}
          onSubmit={(values) => {
            updateProfileMutation.mutate(values);
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="w-full h-[92%]">
              <AnimatePresence mode="wait">
                {activeTab === "general" && (
                  <motion.div
                    key="general"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="w-full h-[20%] flex items-center justify-center relative  "
                    >
                      <div className="  h-full w-[10%] relative inline-block ">
                        <img
                          className="h-full   cursor-pointer rounded-full object-cover"
                          src={profileImage}
                          onClick={() => setOpenModal(true)}
                        />

                        <div
                          className={`absolute bottom-1 ${
                            isRtl ? "right-1" : "left-1"
                          } bg-[#EAEAEA] shadow-lg p-2 sm:p-1.5 rounded-full cursor-pointer flex items-center justify-center`}
                        >
                          <CreateIcon className="text-[#848484] !text-[20px] sm:!text-[16px]" />
                        </div>
                      </div>

                      <PanelImageModal
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                        onConfirm={(selectedImage) => {
                          setProfileImage(selectedImage);
                          setOpenModal(false);
                        }}
                        apiImagesData={apiImagesData}
                        currentProfileUrl={currentProfileUrl}
                      />
                    </motion.div>

                    <div
                      className={`w-full h-[80%] grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-3  ${
                        isRtl ? "pr-13" : "pl-13"
                      }`}
                    >
                      <motion.div variants={itemVariants} className="w-[90%] ">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.name")}
                        </p>
                        <Field
                          type="text"
                          name="name"
                          placeholder={ph("name")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.lastname")}
                        </p>
                        <Field
                          type="text"
                          name="lastname"
                          placeholder={ph("lastname")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.nationalcode")}
                        </p>
                        <Field
                          type="text"
                          name="nationalcode"
                          placeholder={ph("nationalcode")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.gender")}
                        </p>
                        <div className="relative w-full">
                          <Field
                            as="select"
                            name="gender"
                            className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc]
                            outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2
                            focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1
                            border-[#EAEAEA] text-[#848484] rounded-2xl appearance-none cursor-pointer"
                          >
                            <option value="" disabled>
                              {ph("gender")}
                            </option>
                            <option value="male">
                              {t("userinfo.gender.male")}
                            </option>
                            <option value="female">
                              {t("userinfo.gender.female")}
                            </option>
                          </Field>

                          <div
                            className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-[#848484] ${
                              isRtl ? "left-4" : "right-4"
                            }`}
                          >
                            <ExpandMoreIcon />
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.birthday")}
                        </p>

                        <DatePicker
                          calendar={persian}
                          locale={persian_fa}
                          containerClassName="w-full"
                          inputClass=" cursor-pointer  dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                          value={values.birthday}
                          onChange={(date) => {
                            setFieldValue(
                              "birthday",
                              date?.toDate?.()?.toISOString()
                            );
                          }}
                          placeholder={birthdayPlaceholder}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.phonenumber")}
                        </p>
                        <Field
                          name="phonenumber"
                          type="text"
                          placeholder={ph("phonenumber")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-[90%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.fields.aboutme")}
                        </p>
                        <Field
                          name="aboutme"
                          type="text"
                          placeholder={ph("aboutme")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>

                      <motion.div
                        className=" text-end w-[91%]"
                        variants={itemVariants}
                      >
                        <button
                          type="submit"
                          className={`bg-[#008C78] text-[white] rounded-3xl p-3 mt-8 cursor-pointer `}
                        >
                          {t("userinfo.buttons.edit")}
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "location" && (
                  <motion.div
                    key="location"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-between items-between h-full text-[#848484]"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="w-[100%] mt-5"
                    >
                      <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                        {t("userinfo.location.adress")}
                      </p>
                      <Field
                        type="text"
                        name="adress"
                        placeholder={t("userinfo.location.adressplace")}
                        className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                      />
                    </motion.div>

                    <motion.div className="flex justify-between">
                      <motion.div variants={itemVariants} className="w-[45%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.location.height")}
                        </p>
                        <Field
                          type="text"
                          name="lat"
                          placeholder={t("userinfo.location.heightplace")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>
                      <motion.div variants={itemVariants} className="w-[45%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.location.width")}
                        </p>
                        <Field
                          type="text"
                          name="lng"
                          placeholder={t("userinfo.location.widthplace")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="w-full h-[45%] mt-3 mb-3  "
                    >
                      <MapContainer
                        center={[35.6892, 51.389]}
                        zoom={15}
                        className="w-full h-full rounded-4xl border-2 border-[#008c78] "
                      >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <LocationMarker
                          className="border-5 border-red-400"
                          lat={values.lat}
                          lng={values.lng}
                          setAddress={(val) => setFieldValue("adress", val)}
                          setLat={(val) => setFieldValue("lat", val)}
                          setLng={(val) => setFieldValue("lng", val)}
                        />
                      </MapContainer>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="bg-[#008C78] text-[white] rounded-2xl p-3 w-[15%] text-center cursor-pointer"
                    >
                      <button className="cursor-pointer">
                        {t("userinfo.location.button")}
                      </button>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "social" && (
                  <motion.div
                    key="social"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-evenly h-full text-[#848484] "
                  >
                    <div className="flex justify-between">
                      <motion.div variants={itemVariants} className="w-[47%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.social.email")}
                        </p>
                        <Field
                          type="text"
                          name="email"
                          placeholder={ph("email")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-[47%]">
                        <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                          {t("userinfo.social.telegram")}
                        </p>
                        <Field
                          type="text"
                          name="telegram"
                          placeholder={ph("telegram")}
                          className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="w-[47%]">
                      <p className="mb-2 indent-3 text-[16px] dark:text-[white]">
                        {t("userinfo.social.linkdin")}
                      </p>
                      <Field
                        type="text"
                        name="linkdin"
                        placeholder={ph("linkdin")}
                        className="dark:bg-[#454545] dark:focus:ring-0 dark:border-[#848484] dark:text-[#ccc] outline-none w-full mb-1 bg-[white] focus:outline-none focus:ring-2 focus:ring-[#008C78] transition duration-400 px-5 py-2 border-1 border-[#EAEAEA] text-[#848484] rounded-2xl"
                      />
                    </motion.div>

                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      className="bg-[#008C78] text-[white] rounded-2xl p-3 w-[15%] text-center cursor-pointer mt-4"
                    >
                      {t("userinfo.social.button")}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default UserPanelUserInfo;
