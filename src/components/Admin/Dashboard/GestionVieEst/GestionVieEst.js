import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { CssBaseline, Box } from "@mui/material";
import Sidebar from '../Sidebar';
import Topbar from '../../../Global/Topbar';
import Item from '../../../Global/item'; // Assurez-vous que le chemin d'importation est correct

export default function GestionVieEst() {
  return (
    <React.Fragment>
      <div style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}>
        <CssBaseline />
        <Box sx={{ background: "#F2F2F7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Topbar />
          <Box display="flex" flexGrow={1} overflow="auto" style={{ overflowX: "hidden" }}>
            <Sidebar flex="2" />
            <Box marginLeft="25%" />
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <Item
                    title="Gestion des clubs"
                    description=""
                    buttonText="Découvrir Plus"
                    to="/gestionClub"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Gestion du centre 4c"
                    description=""
                    buttonText="Découvrir Plus"
                    to="/gestion4C"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Gestion de l'incubateur"
                    description=""
                    buttonText="Découvrir Plus"
                    to="/gestionIncubateur"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Gestion des associations"
                    description=""
                    buttonText="Découvrir Plus"
                    to="/gestionAssociation"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
