import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  Checkbox,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const CategoryFilter = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("educational");
  const containerRef = useRef(null);

  const categories = [
    { key: "educational" },
    { key: "general" },
    { key: "jobMarket" },
  ];

  return (
    <div ref={containerRef} className="relative w-full">
      <Accordion
        expanded={false}
        square
        elevation={0}
        className="!m-0 !shadow-sm !border !border-gray-200 !rounded-2xl
                   !bg-white dark:!bg-[#333] dark:!border-[#555] transition-all duration-300 w-full"
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              className={`text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          }
          onClick={() => setIsOpen((prev) => !prev)}
          className="!px-4 !py-3 flex justify-between items-center cursor-pointer select-none"
        >
          <Typography className="!font-bold !font-[Estedad] !text-gray-800 dark:!text-gray-100 !text-sm sm:!text-base lg:!text-lg transition-colors duration-300">
            {t("categoryFilter.title")}
          </Typography>
        </AccordionSummary>
      </Accordion>

      <div
        className={`absolute z-10 !top-12 left-0 right-0 bg-white dark:bg-[#333]
          border border-t-0 border-gray-200 dark:border-[#555]
          rounded-b-2xl shadow-lg transition-all duration-300 origin-top overflow-hidden
          ${
            isOpen
              ? "opacity-100 scale-y-100 pointer-events-auto h-auto"
              : "opacity-0 scale-y-0 pointer-events-none h-0"
          }
        `}
        style={{ top: "100%" }}
      >
        <div className="p-4 flex flex-col gap-3">
          {categories.map(({ key }) => (
            <label
              key={key}
              className="flex justify-between items-center text-sm sm:text-base text-gray-700 dark:text-gray-200 cursor-pointer transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span>{t(`categoryFilter.categories.${key}`)}</span>
              <Checkbox
                checked={selected === key}
                onChange={() => setSelected(key)}
                sx={{
                  color: "#ccc",
                  "&.Mui-checked": {
                    color: "#008C78",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 22,
                  },
                }}
              />
            </label>
          ))}

          <button className="text-[#008C78] dark:text-emerald-400 mt-2 text-sm font-medium hover:underline transition-colors duration-200 text-right">
            {t("categoryFilter.more")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
