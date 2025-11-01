import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Avatar,
} from "@mui/material";

import img1 from "../../assets/Images/userinfo.png";
import img2 from "../../assets/Images/Modal.png";
import img3 from "../../assets/Images/plus.png";
import { useTranslation } from "react-i18next";

const MAX_CUSTOM_IMAGES = 6;

const PanelImageModal = ({ open, onClose, onConfirm }) => {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(img1);
  const [customImages, setCustomImages] = useState([]);
  const fileInputRef = useRef(null);

  const images = [img1, img2];

  const handleImageClick = (img) => {
    if (img === img3) {
      if (customImages.length < MAX_CUSTOM_IMAGES) {
        fileInputRef.current.click();
      }
    } else {
      setSelectedImage(img);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && customImages.length < MAX_CUSTOM_IMAGES) {
      const imageURL = URL.createObjectURL(file);
      setCustomImages((prev) => [...prev, imageURL]);
      setSelectedImage(imageURL);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          width: "100%",

          backgroundColor: "#fff",
        },
      }}
    >
      <DialogContent className="dark:bg-[#333]">
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar
            src={selectedImage}
            alt="Profile"
            sx={{
              width: 160,
              height: 160,
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />

          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {images.map((img, i) => (
              <Avatar
                key={`fixed-${i}`}
                src={img}
                alt={`Option ${i}`}
                onClick={() => handleImageClick(img)}
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "8px",
                  border:
                    selectedImage === img
                      ? "2px solid #008C78"
                      : "2px solid transparent",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            ))}

            {customImages.map((img, i) => (
              <Avatar
                key={`custom-${i}`}
                src={img}
                alt={`Custom ${i}`}
                onClick={() => setSelectedImage(img)}
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "8px",
                  border:
                    selectedImage === img
                      ? "2px solid #008C78"
                      : "2px solid transparent",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            ))}

            <Avatar
              src={img3}
              alt="Add"
              onClick={() => handleImageClick(img3)}
              sx={{
                width: 70,
                height: 70,
                borderRadius: "8px",
                border: "2px solid transparent",
                cursor:
                  customImages.length >= MAX_CUSTOM_IMAGES
                    ? "not-allowed"
                    : "pointer",
                opacity: customImages.length >= MAX_CUSTOM_IMAGES ? 0.5 : 1,
                transition: "0.3s",
                "&:hover": {
                  transform:
                    customImages.length >= MAX_CUSTOM_IMAGES
                      ? "none"
                      : "scale(1.05)",
                },
              }}
            />
          </Box>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Box>
      </DialogContent>

      <DialogActions
        className="dark:bg-[#333]"
        sx={{ justifyContent: "space-between", px: 3, pb: 2, pt: 0 }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: "#848484",
            color: "#848484",
            borderRadius: "12px",
            px: 3,
            fontFamily: "Estedad",
          }}
        >
          {t("userinfo.modal.cancel")}
        </Button>
        <Button
          onClick={() => onConfirm(selectedImage)}
          variant="contained"
          sx={{
            fontFamily: "Estedad",
            backgroundColor: "#008C78",
            color: "#fff",
            borderRadius: "12px",
            px: 3,
          }}
        >
          {t("userinfo.modal.confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PanelImageModal;
