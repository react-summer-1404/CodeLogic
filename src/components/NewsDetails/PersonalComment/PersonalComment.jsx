import React, { useState } from "react";
import img1 from "../../../assets/Images/commentt.png";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useTranslation } from "react-i18next";
import ChatIcon from "@mui/icons-material/Chat";
import { Dialog } from "@mui/material";
import AnswerComment from "../AnswerComment/AnswerComment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NewsCommentVal } from "../../../utils/Validations/NewsCommentVal/NewsCommentVal";

const PersonalComment = () => {
  const commentData = [
    {
      image: img1,
      key: "comment1",
    },
    {
      image: img1,
      key: "comment2",
    },
    {
      image: img1,
      key: "comment3",
    },
    {
      image: img1,
      key: "comment4",
    },
    {
      image: img1,
      key: "comment5",
    },
    {
      image: img1,
      key: "comment6",
    },
  ];

  const [initialValues] = useState({ title: "", answer: "" });

  const [validationSchema, setValidationSchema] = useState(NewsCommentVal());

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg  p-5 mt-8 dark:bg-[#333]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img src={img1} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-bold text-[#1E1E1E] text-[16px] dark:text-[white] ">
              {t("personalComment.user.name")}
            </p>
            <p className="text-[14px] text-[#848484] mt-1">
              {" "}
              {t("personalComment.user.date")}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-700 text-sm leading-7">
        <p className="w-full text-[1E1E1E] text-[14px] mb-1 dark:text-[white] ">
          {t("personalComment.comment.title")}
        </p>

        <p className=" text-[#848484] text-[14px]  ">
          {" "}
          {t("personalComment.comment.text")}
        </p>
      </div>

      <div className="flex items-center gap-5 mt-4 text-gray-600 text-sm">
        <div className="flex items-center gap-1">
          <ThumbDownOffAltOutlinedIcon className="text-[#1E1E1E] dark:text-[#848484]" />
          <span className="dark:text-[#848484]">200</span>
        </div>

        <div className="flex items-center gap-1">
          <ThumbUpOutlinedIcon className="text-[#1E1E1E] dark:text-[#848484]" />
          <span className="dark:text-[#848484]">200</span>
        </div>
        <div onClick={handleOpen} className="cursor-pointer ">
          <ChatIcon className="text-[#1E1E1E] text-[12px] ml-1 dark:text-[#848484] " />
          <button className="text-[#1E1E1E] text-[16px] cursor-pointer dark:text-[#848484] ">
            <span className="text-[#1E1E1E] text-[14px] ml-1 dark:text-[#848484] ">
              2
            </span>
            {t("personalComment.actions.answer")}
          </button>
        </div>

        <button
          onClick={() => setShowReply(true)}
          className=" cursor-pointer  text-[#008C78] hover:underline decoration-1 transition"
        >
          {t("personalComment.actions.replyButton")}
        </button>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {() => (
          <Form>
            {showReply && (
              <div className="mt-6 space-y-3 relative">
                <Field
                  type="text"
                  name="title"
                  className="w-full px-5 py-3 text-[#848484] mb-10  rounded-4xl outline-none border-none bg-[#F3F4F6] dark:bg-[#9d9d9d] dark:text-[black]  "
                  placeholder={t("personalComment.replyForm.titlePlaceholder")}
                />
                <div className="text-[red] absolute right-5 top-14">
                  <ErrorMessage name="title" />
                </div>

                <Field
                  type="text"
                  name="answer"
                  className="w-full px-5 pb-15 text-[#848484] h-[100px] mb-5  rounded-4xl outline-none border-none bg-[#F3F4F6] dark:bg-[#9d9d9d] dark:text-[black]  "
                  placeholder={t("personalComment.replyForm.textPlaceholder")}
                />
                <div className="text-[red] absolute right-5 top-48">
                  <ErrorMessage name="answer" />
                </div>

                <ChatBubbleOutlineIcon className="mt-3 dark:text-[#848484]" />
                <button
                  onClick={() => setShowReply(false)}
                  className="text-[#1E1E1E] mr-3  cursor-pointer hover:text-[#008C78] dark:text-[#848484]"
                >
                  {t("personalComment.actions.closeReply")}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>

      <Dialog
        PaperProps={{
          sx: (theme) => ({
            backgroundColor: theme.palette.mode === "dark" ? "#222" : "#fff",
            color: theme.palette.mode === "dark" ? "#f3f3f3" : "#1e1e1e",
            borderRadius: "16px",
            padding: "24px",
            maxHeight: "80vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#444" : "#f3f4f6",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#00bfa5" : "#008c78",
              borderRadius: "8px",
            },
          }),
        }}
        disableScrollLock
        open={open}
        onClose={handleClose}
      >
        {commentData.map((item, index) => (
          <AnswerComment
            key={index}
            image={item.image}
            title={t(`answerComment.${item.key}.title`)}
            name={t(`answerComment.${item.key}.name`)}
            date={t(`answerComment.${item.key}.date`)}
            text={t(`answerComment.${item.key}.text`)}
            like={t(`answerComment.${item.key}.like`)}
            dislike={t(`answerComment.${item.key}.dislike`)}
          />
        ))}
      </Dialog>
    </div>
  );
};

export default PersonalComment;
