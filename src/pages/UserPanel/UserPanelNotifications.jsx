import React, { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetAllNotifications } from "../../core/services/api/Get/GetAllNotifications";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ErrorIcon from "@mui/icons-material/Error";
import Lottie from "lottie-react";
import ReactPaginate from "react-paginate";
import notif from "../../assets/Images/Notification.json";
import empty from "../../assets/Images/empty.json";
import infinity from "../../assets/Images/Infinity Loader.json";

const formatDate = (isoDate) => {
  if (!isoDate) return "-";
  return new Date(isoDate).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const UserPanelNotifications = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: GetAllNotifications,
  });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil((data?.length || 0) / itemsPerPage);
  }, [data]);

  useEffect(() => {
    if (currentPage > Math.max(1, totalPages)) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const displayedNotifications = useMemo(() => {
    if (!data || data.length === 0) return [];
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage]);

  if (isLoading) {
    return (
      <div className=" w-full bg-[#F3F4F6] mt-5 md:m-0 md:h-[85%] flex flex-col justify-center items-center rounded-4xl p-5 dark:bg-[#333] ">
        <Lottie
          style={{ width: "250px", height: "250px" }}
          animationData={infinity}
        />
        <p className="text-[black] dark:text-[#898989] ">
          درحال بارگذاری اطلاعات...
        </p>
      </div>
    );
  }

  return (
    <div className=" font-override w-full bg-[#F3F4F6] mt-5 md:m-0 md:h-[85%] flex flex-col rounded-4xl p-5 dark:bg-[#333] ">
      <Box className="mb-4 flex items-center gap-3">
        <div style={{ width: 60, height: 60 }}>
          <Lottie animationData={notif} />
        </div>
        <div>
          <Typography
            variant="h6"
            className="font-bold text-[black] dark:text-[white]"
          >
            اعلان‌ها
          </Typography>
          <Typography variant="body2" className="text-[#898989]">
            لیست تمامی اعلان‌های حساب کاربری شما
          </Typography>
        </div>
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        className="!w-[95%] mx-auto !rounded-xl  overflow-hidden !bg-[#F3F4F6] dark:!bg-[#333]"
      >
        <Table sx={{ minWidth: 650 }} aria-label="notifications table">
          <TableHead className="bg-[#008C78] ">
            <TableRow>
              <TableCell
                align="center"
                className="font-bold dark:!text-[white] w-[25%]"
              >
                وضعیت
              </TableCell>
              <TableCell
                align="center"
                className="font-bold dark:!text-[white] w-[32%]"
              >
                متن پیام
              </TableCell>
              <TableCell
                align="center"
                className="font-bold dark:!text-[white] w-[18%]"
              >
                تاریخ و ساعت
              </TableCell>
              <TableCell
                align="center"
                className="font-bold dark:!text-[white] w-[25%]"
              >
                عملیات
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {displayedNotifications.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">
                  <Chip
                    icon={row.seen ? <CheckCircleIcon /> : <ErrorIcon />}
                    label={row.seen ? "خوانده شده" : "جدید"}
                    variant="filled"
                    size="small"
                    sx={{
                      backgroundColor: row.seen ? "#008C78" : "#ffbb00ff",
                      color: row.seen ? "#fff" : "black",
                      "& .MuiChip-icon": {
                        marginLeft: "-5px",
                        marginRight: "4px",
                        color: row.seen ? "#fff" : "#fff",
                      },
                    }}
                  />
                </TableCell>

                <TableCell align="right">
                  <Typography
                    variant="body1"
                    className="text-sm font-bold text-[black] dark:text-[#898989]"
                  >
                    {row.message}
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-[black] dark:text-[#898989]">
                      {formatDate(row.insertDate)}
                    </span>
                  </div>
                </TableCell>

                <TableCell align="center">
                  <Tooltip title="ویرایش اعلان">
                    <IconButton size="small">
                      <BorderColorIcon
                        className="text-[#898989] dark:text-[#898989]"
                        fontSize="small"
                      />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {(!data || data.length === 0) && (
          <Box className="p-10 text-center flex flex-col items-center justify-center text-gray-400">
            <div style={{ width: 200, height: 200 }}>
              <Lottie animationData={empty} />
            </div>
            <Typography className="mt-2 text-[black] dark:text-[white]">
              هیچ اعلانی یافت نشد
            </Typography>
          </Box>
        )}
      </TableContainer>

      {totalPages > 1 && (
        <div className="mt-4">
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            previousLabel="< "
            onPageChange={handlePageChange}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            forcePage={currentPage - 1}
            containerClassName="flex flex-wrap justify-start gap-1 sm:gap-2 mt-6"
            pageClassName="px-3 py-2 sm:px-5 sm:py-3 rounded-[15px] font-semibold shadow-md cursor-pointer text-sm sm:text-xl bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            activeClassName="!bg-[#008C78] text-white rounded-2xl shadow-md"
            previousClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            nextClassName="px-2 py-1 sm:px-3 sm:py-1 rounded-2xl shadow-md cursor-pointer text-sm bg-[#EAEAEA] dark:bg-[#555] text-black dark:text-[#fff]"
            previousLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
            nextLinkClassName="font-bold text-lg sm:text-2xl px-1 sm:px-2 py-1 flex items-center justify-center h-full w-full"
          />
        </div>
      )}
    </div>
  );
};

export default UserPanelNotifications;
