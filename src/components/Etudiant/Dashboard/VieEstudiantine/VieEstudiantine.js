import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { CssBaseline, Box } from "@mui/material";
import Sidebar from '../Sidebar';
import Topbar from '../../../Global/Topbar';
import Item from '../../../Global/item'; // Assurez-vous que le chemin d'importation est correct

export default function VieEstudiantine() {
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
                    title="Les clubs"
                    description="L’ISSAT SOUSSE contient au environ 17 clubs actifs dans des domaines différents."
                    buttonText="Découvrir Plus"
                    to="/clubs"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Centre 4c"
                    description="Centre de Carrière et de Certification des Compétence."
                    buttonText="Découvrir Plus"
                    to="/4c"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Incubateur"
                    description="L’ISSAT SOUSSE contient un incubateur pour aider les entreprises ."
                    buttonText="Découvrir Plus"
                    to="/incubateur"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Associations"
                    description="L’ISSATS SOUSSE contient deux organisations: AISEC et ARSCII."
                    buttonText="Découvrir Plus"
                    to="/association"
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
