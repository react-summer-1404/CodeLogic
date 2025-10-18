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
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState("آموزشی");
  const containerRef = useRef(null);

  const categories = ["آموزشی", "اطلاعات عمومی", "بازار کار"];

  return (
    <div ref={containerRef} className="relative w-64">
      <Accordion
        expanded={false}
        square
        elevation={0}
        className="!m-0 !bg-white !shadow-sm !border !border-gray-200 !rounded-2xl "
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              className={`text-gray-600 transition-transform duration-300  ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          }
          onClick={() => setIsOpen((prev) => !prev)}
          className="!px-4 !py-3 flex justify-between items-center cursor-pointer select-none"
        >
          <Typography className="!font-bold !text-gray-800 !text-lg">
            {t("categoryFilter.title")}
          </Typography>
        </AccordionSummary>
      </Accordion>

      <div
        className={`absolute !top-12 left-0 right-0 bg-white border border-t-0 border-gray-200 rounded-b-2xl shadow-md transition-all duration-300 origin-top overflow-hidden ${
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
        style={{ top: "100%" }}
      >
        <div className="p-4 flex flex-col gap-3">
          {categories.map((item) => (
            <label
              key={item}
              className="flex justify-between items-center text-gray-700 cursor-pointer"
            >
              <span>{item}</span>
              <Checkbox
                checked={selected === item}
                onChange={() => setSelected(item)}
                sx={{
                  color: "#ccc",
                  "&.Mui-checked": { color: "#10b981" },
                  padding: 0,
                }}
              />
            </label>
          ))}

          <button className="text-emerald-600 mt-2 text-sm font-medium hover:underline">
            {t("categoryFilter.more")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
