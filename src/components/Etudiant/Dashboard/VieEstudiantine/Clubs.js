import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Sidebar from "../Sidebar";
import Topbar from "../../../Global/Topbar";

export default function Clubs() {
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

            <img
              src={require(`../../../../Assets/clubs.png`)}
              alt="incubateur issatso"
            />
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
