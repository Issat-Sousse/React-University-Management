import React from "react";
import { CssBaseline, Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "../../Global/Topbar";
import ItemStage from "../../Global/itemStage";
export default function StagePfeLaravel() {
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
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={8}>
                <ItemStage
                  title="Stage PFE"
                  tel="98625548"
                  adresse="Rue Victor Hugo Immeuble Mahjoub Sousse 4000; Matricule fiscale: 1780357A"
                  poste="stage pfe"
                  description="Sujet :une plateforme de gestion des remplacements entre les médecins Technologies : Laravel, MySQL, git, CSS,js"
                  entreprise="ikareDoc"
                  responsable="fares karbia"
                  typeOffre="Offre de stage"
                  email="contact@dentameet.tn"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
