import React from "react";
import styled from "@mui/system/styled";

const StyledItem = styled("div")(({ theme }) => ({
  background: "rgba(124, 169, 221, 1) 93%",

  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  borderRadius: "0px",
  textAlign: "center",
  height: "100%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "60px",
  marginBottom: "50px",
  marginTop: "-40px",

  // Ajout d'espace autour de l'élément
  padding: "1.5em",
  transition: "transform 0.3s",
}));

const Title = styled("h3")(({ theme }) => ({
  // Utilisation de 'em' pour l'espacement
  fontSize: "0.9em", // Taille de police responsive
  textTransform: "uppercase", // Texte en majuscules
  color: "white",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5em", // Ajustement de la taille pour les petits écrans
  },
}));

export default function ItemTitleCard({ title }) {
  return (
    <StyledItem>
      <Title>{title}</Title>
    </StyledItem>
  );
}
