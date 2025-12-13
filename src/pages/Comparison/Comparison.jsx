import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getCourseById from "../../core/services/api/Get/getCourseById";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleIcon from "@mui/icons-material/People";
import TagIcon from "@mui/icons-material/Tag";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import img1 from "../../assets/Images/HTML5Course.png";
import Lottie from "lottie-react";
import infinity from "../../assets/Images/Infinity Loader.json";
import compare from "../../assets/Images/Compare.json";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const ApiData = (Data) => {
  const categories = Array.isArray(Data.courseTech)
    ? Data.courseTech.map((t) => t.tech.techName)
    : "بدون دسته‌بندی";

  const startDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(Data.startTime));

  const endDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(Data.endTime));

  return {
    courseId: Data.courseId,
    imageAddress: Data.imageAddress || img1,
    title: Data.title,
    currentRate: String(Data.currentRate).slice(0, 3),
    categories: categories,
    courseLevelName: Data.courseLevelName,
    courseStatusName: Data.courseStatusName,
    teacherName: Data.teacherName,
    startDate: startDate,
    endTime: endDate,
    studentsCount: Data.studentCount,
    capacity: Data.capacity,
    cost: Data.cost,
  };
};

const CourseCard = ({ title, data }) => {
  const {
    currentRate,
    categories,
    capacity,
    cost,
    courseLevelName,
    courseStatusName,
    teacherName,
    imageAddress,
    startDate,
    endTime,
    courseId,
    studentsCount,
  } = data;

  const details = [
    {
      label: "امتیاز دوره",

      value: currentRate,
      icon: <GradeIcon className="text-yellow-500" />,
      highlight: true,
    },
    {
      label: "سطح دوره",
      value: courseLevelName,
      icon: <PsychologyIcon className="text-[#008C78]" />,
    },
    {
      label: "وضعیت ثبت نام",
      value: courseStatusName,
      icon: <CheckCircleIcon className="text-[#008C78]" />,
    },
    {
      label: "استاد",
      value: teacherName,
      icon: <AssignmentIndIcon className="text-[#008C78]" />,
    },
    {
      label: "تاریخ شروع",
      value: startDate,
      icon: <CalendarMonthIcon className="text-[#008C78]" />,
    },
    {
      label: "تاریخ پایان",
      value: endTime,
      icon: <CalendarMonthIcon className="text-[#008C78]" />,
    },
    {
      label: "ظرفیت دوره",
      value: capacity,
      icon: <ReduceCapacityIcon className="text-[#008C78]" />,
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-[white] dark:bg-[#333] shadow-2xl rounded-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 ">
      <img
        style={{ width: "100%", objectFit: "cover" }}
        src={imageAddress}
        alt={title}
      />
      <div className={`p-4  text-white`}>
        <h3 className="text-lg font-bold text-center text-[black] dark:text-[#848484]">
          {title}
        </h3>
      </div>

      <div className="p-4   min-h-[5rem]">
        <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center dark:text-[#848484]">
          <TagIcon className="ml-1 text-gray-600 w-4 h-4" />
          تکنولوژی ها:
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="px-3  py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full "
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-3">
        {details.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm pb-5 px-3 border-b border-gray-200  "
          >
            <div className="flex items-center text-gray-600 font-medium dark:text-[#848484]">
              <span className="ml-2 w-5 h-5 flex items-center justify-center dark:text-[#848484]">
                {item.icon}
              </span>
              {item.label}:
            </div>
            <div
              className={`font-semibold dark:text-[#848484] ${
                item.highlight ? "text-yellow-600" : "text-gray-800"
              }`}
            >
              {item.value}
            </div>
          </div>
        ))}

        <div className="pt-3  mt-3 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 ml-2 flex items-center dark:text-[#848484]">
              <PeopleIcon className="w-4 h-4 ml-1 text-gray-600 dark:text-[#848484]" />
              تعداد دانشجو:
            </p>
            <p className="text-xl font-bold text-[#008C78]  mt-2">
              {studentsCount}نفر
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 ml-2 flex items-center dark:text-[#848484]">
              <AttachMoneyIcon className="w-4 h-4 ml-1 text-gray-600 dark:text-[#848484]" />
              قیمت دوره:
            </p>
            <p className="text-xl font-bold text-[#008C78] mt-2 ">
              {cost}تومان
            </p>
          </div>
        </div>
        <Link to={`/courseDetail/${courseId}`}>
          <div className="flex justify-center mt-10 bg-[#008C78] rounded-xl  text-[white] p-3 cursor-pointer">
            <button>جزئیات دوره</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Comparison = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [searchParams] = useSearchParams();
  const courseId1 = searchParams.get("course1");
  const courseId2 = searchParams.get("course2");

  const { data: courseData1, isLoading: loading1 } = useQuery({
    queryKey: ["courseDetail", courseId1],
    queryFn: () => getCourseById(courseId1),

    enabled: !!courseId1,
  });

  const { data: courseData2, isLoading: loading2 } = useQuery({
    queryKey: ["courseDetail", courseId2],
    queryFn: () => getCourseById(courseId2),

    enabled: !!courseId2,
  });

  const isLoading = loading1 || loading2;

  const course1 = courseData1 ? ApiData(courseData1) : null;
  const course2 = courseData2 ? ApiData(courseData2) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F3F4F6] dark:bg-[#1e1e1e] ">
        <Lottie animationData={infinity} />
        <h2 className="text-2xl text-[black] dark:text-[white]">
          درحال بارگذاری اطلاعات دوره‌ها...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6] p-4 sm:p-10 dark:bg-[#1e1e1e] relative">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-[#1E1E1E] dark:text-[white]">
        مقایسه دوره‌ها
      </h2>
      <div className="absolute left-138 top-60">
        <Lottie
          style={{ width: "400px", height: "400px" }}
          animationData={compare}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <CourseCard title={course1.title} data={course1} />

        <CourseCard title={course2.title} data={course2} />
      </div>
    </div>
  );
};

export default Comparison;
