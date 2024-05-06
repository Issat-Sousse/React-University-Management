import React from "react";
import styled from "@mui/system/styled";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const StyledItem = styled("div")(({ theme }) => ({
  backgroundColor: "white",

  background:
    "radial-gradient(circle, rgba(0, 40, 83, 1) 0%, rgba(124,169,221,1) 93%)",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  borderRadius: "50px",
  textAlign: "center",
  height: "40%",
  width: "95%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)", // Augmentation de l'ombre
  transform: "translateY(0)",
  marginTop: "40px",
  marginBottom: "-40px",
  // Ajout d'espace autour de l'élément
  padding: "1.5em",
  transition: "transform 0.3s",
}));

const Title = styled("h3")(({ theme }) => ({
  // Utilisation de 'em' pour l'espacement
  fontSize: "1.6em", // Taille de police responsive
  textTransform: "uppercase", // Texte en majuscules
  color: "white",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5em", // Ajustement de la taille pour les petits écrans
  },
}));

export default function ItemTitle({ title }) {
  return (
    <StyledItem>
      <Title>{title}</Title>
    </StyledItem>
  );
}
