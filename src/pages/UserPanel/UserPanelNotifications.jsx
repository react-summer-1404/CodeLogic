import React, { useState, useMemo, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Lottie from "lottie-react";
import ReactPaginate from "react-paginate";
import notif from "../../assets/Images/Notification.json";
import empty from "../../assets/Images/empty.json";
import infinity from "../../assets/Images/Infinity Loader.json";
import { UpdateNotifications } from "../../core/services/api/put/UpdateNotifications";
import { toast } from "react-toastify";
import { GetNotificationHaventSeen } from "../../core/services/api/Get/GetNotificationHaventSeen";

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
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: GetAllNotifications,
  });

  const { data: dataseen, isPending } = useQuery({
    queryKey: ["notificationsseen"],
    queryFn: GetNotificationHaventSeen,
  });

  const updateMutation = useMutation({
    mutationFn: UpdateNotifications,
    onSuccess: () => {
      toast.success("عملیات با موفقیت انجام شد");
      queryClient.invalidateQueries(["notifications"]);
      queryClient.invalidateQueries(["notificationsseen"]);
    },
    onError: () => {
      toast.error("خطا در انجام عملیات");
    },
  });

  const handleSeenClick = (notificationId) => {
    updateMutation.mutate(notificationId);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredData = useMemo(() => {
    if (selectedTab === "unread") {
      return Array.isArray(dataseen) ? dataseen : [];
    }
    return Array.isArray(data) ? data : [];
  }, [data, dataseen, selectedTab]);

  const totalPages = useMemo(() => {
    return Math.ceil((filteredData?.length || 0) / itemsPerPage);
  }, [filteredData]);

  useEffect(() => {
    if (currentPage > Math.max(1, totalPages)) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const displayedNotifications = useMemo(() => {
    if (!filteredData || filteredData.length === 0) return [];
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage]);

  if (isLoading || (selectedTab === "unread" && isPending)) {
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
      <Box className="mb-4 w-[96%] mx-auto flex items-center justify-between gap-3 ">
        <div className="flex ">
          <div style={{ width: 60, height: 60 }}>
            <Lottie animationData={notif} />
          </div>
          <div>
            <Typography
              variant="h6"
              className="font-bold text-[black] dark:text-[white]"
            >
              {selectedTab === "all" ? "اعلان‌ها" : "اعلان های خوانده نشده"}
            </Typography>
            <Typography variant="body2" className="text-[#898989]">
              {selectedTab === "all"
                ? "لیست تمامی اعلان‌های حساب کاربری شما"
                : "لیست اعلان‌های خوانده نشده حساب کاربری شما"}
            </Typography>
          </div>
        </div>
        <div className="flex ">
          <p
            className={`text-[black] font-semibold ml-[30px] dark:text-[white] p-2 cursor-pointer 
      ${selectedTab === "all" ? "border-b-3 border-[#008C78]" : ""}`}
            onClick={() => {
              setSelectedTab("all");
              setCurrentPage(1);
            }}
          >
            تمام اعلانات
          </p>

          <p
            className={`text-[black] font-semibold dark:text-[white] p-2 ml-[20px] cursor-pointer 
      ${selectedTab === "unread" ? "border-b-3 border-[#008C78]" : ""}`}
            onClick={() => {
              setSelectedTab("unread");
              setCurrentPage(1);
            }}
          >
            اعلان های خوانده نشده
          </p>
        </div>
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        className="!w-[95%] mx-auto !rounded-xl   !bg-[#F3F4F6] dark:!bg-[#333]"
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
                className="font-bold dark:!text-[white] w-[20%]"
              >
                تاریخ و ساعت
              </TableCell>
              <TableCell
                align="center"
                className="font-bold dark:!text-[white] w-[23%]"
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
                  {row.seen ? (
                    <Typography
                      variant="body2"
                      className="text-sm font-bold text-[#898989] "
                    >
                      خوانده شد
                    </Typography>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => handleSeenClick(row.id)}
                      disabled={updateMutation.isLoading}
                      sx={{
                        borderColor: "#008C78",
                        color: "#008C78",
                        "&:hover": {
                          borderColor: "#008C78",
                          backgroundColor: "#008C78",
                          color: "white",
                        },
                      }}
                    >
                      {updateMutation.isLoading ? "..." : "دیدم"}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredData.length === 0 && (
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
            containerClassName="flex flex-wrap justify-start gap-1 sm:gap-2 "
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
