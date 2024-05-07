import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { styled } from "@mui/system";

const CustomImageList = styled(ImageList)(({ theme }) => ({
  width: 950,
  height: 500,
  margin: "3rem",
  marginRight: "1.5rem",
  padding: "3rem", // Augmentation du padding
  backgroundColor: "rgba(255, 255, 255, 0.8)", // Arrière-plan blanc transparent
  borderRadius: "20px", // Bord arrondi
  boxShadow: "0 0 10px rgba(0.2, 0.2, 0.2, 0.3)", // Ombre
}));

export default function ImagesList({ images }) {
  return (
    <CustomImageList cols={3} rowHeight={300}>
      {images.map((item) => (
        <ImageListItem key={item.img}>
          <img
            className="images4c"
            src={require(`../../Assets/${item.img}`)}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Date: {item.description}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </CustomImageList>
  );
}
