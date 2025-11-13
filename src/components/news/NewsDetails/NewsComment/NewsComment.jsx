import React, { useState } from "react";
import PersonalComment from "../PersonalComment/PersonalComment";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NewsCommentValcomment } from "../../../../utils/Validations/NewsCommentVal/NewsCommentVal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddNewsDetailsComment from "../../../../core/services/api/post/AddNewsDetailsComment";
import { toast } from "react-toastify";

const NewsComment = ({ newsId }) => {
  const [initialValues] = useState({ titlecomment: "", description: "" });
  const [validationSchema, setValidationSchema] = useState(
    NewsCommentValcomment()
  );

  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("details");

  const queryClient = useQueryClient();

  const { mutate: addComment, isPending } = useMutation({
    mutationFn: (payload) => AddNewsDetailsComment(payload),
    onSuccess: () => {
      toast.success(t("newsComment.comments.toastsuc"));
      queryClient.invalidateQueries(["newsComments", newsId]);
    },
    onError: () => {
      toast.error(t("newsComment.comments.toasterr"));
    },
  });

  const handleSubmit = (values, { resetForm }) => {
    if (!newsId) {
      return;
    }

    const payload = {
      newsId: newsId,
      title: values.titlecomment,
      describe: values.description,
    };

    addComment(payload);
    resetForm();
  };

  return (
    <div className="px-10  w-full ">
      <div className="py-10 px-4 ">
        <button
          onClick={() => setActiveTab("details")}
          className={`px-6 py-3 font-bold  text-[16px] rounded-4xl transition-colors cursor-pointer dark:text-[white] ${
            activeTab === "details"
              ? "bg-[#008C78] text-white"
              : "text-[#1E1E1E] hover:text-[#008C78]"
          }`}
        >
          {t("newsComment.tabs.details")}
        </button>
        <button
          onClick={() => setActiveTab("comments")}
          className={`px-6 py-3 font-bold  text-[16px] rounded-4xl transition-colors cursor-pointer dark:text-[white] ${
            activeTab === "comments"
              ? "bg-[#008C78] text-white"
              : "text-[#1E1E1E] hover:text-[#008C78]"
          }`}
        >
          {t("newsComment.tabs.comments")}
        </button>
      </div>

      {activeTab === "details" && (
        <div className="space-y-4 leading-8 text-gray-700 ">
          <div className="mb-10 ">
            <h2 className="text-[#1E1E1E] font-[18px] font-bold">
              {t("newsComment.details.section1.title")}
            </h2>
            <p className="font-[16px] text-[#848484] ">
              {t("newsComment.details.section1.text")}
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-[#1E1E1E] font-[18px] font-bold">
              {t("newsComment.details.section2.title")}
            </h2>
            <p className="font-[16px] text-[#848484] ">
              {t("newsComment.details.section2.text")}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-[#1E1E1E] font-[18px] font-bold">
              {t("newsComment.details.section3.title")}
            </h2>
            <p className="font-[16px] text-[#848484] ">
              {t("newsComment.details.section3.text")}
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-[#1E1E1E] font-[18px] font-bold">
              {t("newsComment.details.section4.title")}
            </h2>
            <p className="font-[16px] text-[#848484] ">
              {t("newsComment.details.section4.text")}
            </p>
          </div>
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {activeTab === "comments" && (
              <div className="w-full shadow-md bg-[white] rounded-3xl px-6 py-4 flex flex-wrap dark:bg-[#333] relative">
                <p className="text-[black] font-bold text-[18px] w-full mb-7 dark:text-[white]">
                  {t("newsComment.comments.allComments")}
                  <span className="text-[#1E1E1E] mr-3 bg-[#EAEAEA] rounded-full px-3 py-1 font-bold text-[16px] dark:bg-[#1e1e1e] dark:text-[white]">
                    4
                  </span>
                </p>

                <p className="text-[black] font-bold text-[16px] mb-3 dark:text-[white]">
                  {t("newsComment.comments.titleLabel")}
                </p>
                <Field
                  name="titlecomment"
                  type="text"
                  className="w-full px-5 py-3 text-[#848484] mb-10 rounded-4xl outline-none border-none bg-[#F3F4F6] dark:bg-[#9d9d9d] dark:text-[black]"
                  placeholder={t("newsComment.comments.titlePlaceholder")}
                />
                <div className="text-[red] absolute right-10 top-40">
                  <ErrorMessage name="titlecomment" />
                </div>

                <p className="text-[black] font-bold text-[16px] mb-3 dark:text-[white]">
                  {t("newsComment.comments.textLabel")}
                </p>
                <Field
                  name="description"
                  type="text"
                  className="w-full px-5 pb-38 text-[#848484] mb-10 h-[200px] rounded-4xl outline-none border-none bg-[#F3F4F6] dark:bg-[#9d9d9d] dark:text-[black]"
                  placeholder={t("newsComment.comments.textPlaceholder")}
                />
                <div className="text-[red] absolute right-10 top-110">
                  <ErrorMessage name="description" />
                </div>

                <button
                  className="bg-[#008C78] text-white mt-4 mr-3 px-9 py-2 cursor-pointer rounded-full"
                  type="submit"
                  disabled={isPending}
                >
                  {isPending
                    ? "در حال ارسال..."
                    : t("personalComment.replyForm.reply")}
                </button>

                <PersonalComment newsId={newsId} />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewsComment;
