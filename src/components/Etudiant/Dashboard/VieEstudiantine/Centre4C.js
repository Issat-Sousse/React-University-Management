import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Sidebar from "../Sidebar";
import Topbar from "../../../Global/Topbar";
import Images from "../../../Global/ImagesList";

const itemData = [
  {
    img: "forum entreprise 4c.png",
    title: "Forum Entreprise Etudiant ISSATSO",
    description: "15/09/2023",
  },
  {
    img: "focus day 4c.png",
    title: "Focus Day",
    description: "10/11/2023",
  },
  {
    img: "journée recrutement 4c.png",
    title: "Journée de recrutement",
    description: "12/12/2023",
  },
  {
    img: "journée startup 4c.png",
    title: "Journée Startup",
    description: "01/01/2024",
  },
];

export default function Centre4C() {
  return (
    <React.Fragment>
      <div
        style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}
      >
        <CssBaseline />
        <Box
          sx={{
            background: "#F2F2F7",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Topbar />
          <Box
            display="flex"
            flexGrow={1}
            overflow="auto"
            style={{ overflowX: "hidden" }}
          >
            <Sidebar flex="2" />
            <Box marginLeft="25%" />

            <Images images={itemData} />
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
