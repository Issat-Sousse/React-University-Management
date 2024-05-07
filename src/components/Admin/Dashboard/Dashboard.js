import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "../../Global/Topbar";
import { CssBaseline, Box } from "@mui/material";
import CardHead from "./CardHead";
import Chart2 from "./Chart2";
import Chart1 from "./Chart1";
const Dashboard = () => {
  return (
    //le style du div et celui de sx du box sont essentil pour que couleur du fond soit sur toute la page
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        "@media (max-width: 1280px)": {
          overflowX: "hidden",
        },
      }}
    >
      <CssBaseline></CssBaseline>
      <Box
        sx={{
          background: "#F2F2F7",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar></Topbar>
        <Box display="flex" flexGrow={1} overflow="auto">
          <Sidebar flex="2"></Sidebar>
          <Box
            marginLeft="25%"
            marginTop="3.5rem"
            marginBottom="5.5rem"
            sx={{
              "@media (max-width: 1538px)": {
                marginBottom: "10rem",
              },
              "@media (max-width: 1280px)": {
                marginBottom: "12rem",
                marginLeft: "10%",
                marginRight: "10%",
              },

              "@media (max-width: 1088px)": {
                marginLeft: "30%",
                marginRight: "2%",
              },
            }}
          >
            <CardHead />
            <Chart1 />
            <Chart2 />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
