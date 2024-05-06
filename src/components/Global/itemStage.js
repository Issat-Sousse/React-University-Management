import React from "react";
import styled from "@mui/system/styled";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const StyledItem = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  background:
    "radial-gradient(circle, rgba(213,227,244,1) 41%, rgba(124,169,221,1) 93%)",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  borderRadius: "50px",
  textAlign: "center",
  height: "80%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.5)", // Augmentation de l'ombre
  transform: "translateY(0)",
  margin: "1.5em", // Ajout d'espace autour de l'élément
  padding: "1.5em",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const Title = styled("h3")(({ theme }) => ({
  marginBottom: "1em", // Utilisation de 'em' pour l'espacement
  fontSize: "1.5em", // Taille de police responsive
  textTransform: "uppercase", // Texte en majuscules
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5em", // Ajustement de la taille pour les petits écrans
  },
}));

const Description = styled("p");

const Tel = styled("p");

const Adresse = styled("p");

const Poste = styled("p");

const Entreprise = styled("p");

const Responsable = styled("p");
const TypeOffre = styled("p");
const Email = styled("p");
export default function ItemStage({
  title,
  tel,
  adresse,
  poste,
  description,
  entreprise,
  responsable,
  typeOffre,
  email,
}) {
  return (
    <StyledItem>
      <Title>{title}</Title>
      <Tel>{tel}</Tel>
      <Adresse>{adresse}</Adresse>
      <Poste>{poste}</Poste>
      <Entreprise>{entreprise}</Entreprise>
      <Responsable>{responsable}</Responsable>
      <TypeOffre>{typeOffre}</TypeOffre>
      <Email>{email}</Email>
      <Description>{description}</Description>
    </StyledItem>
  );
}
