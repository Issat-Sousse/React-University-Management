import React from 'react';
import { CssBaseline, Box, Grid } from "@mui/material";
import Sidebar from '../Sidebar';
import Topbar from '../../../Global/Topbar';
import Item from '../../../Global/item'; 

export default function Association() {
  return (
    <React.Fragment>
      <div style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}>
        <CssBaseline />
        <Box sx={{ background: "#F2F2F7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Topbar />
          <Grid container>
            <Grid item xs={12} md={4}>
              <Sidebar flex="2" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container direction="column">
                <Grid item>
                  <Item 
                    title="ARSSII"
                    description="Association de Recherche Scientifique et Innovation en Informatique une jeune association scientifique et apolitique, a été fondée en Mai 2016 par des jeunes enseignants chercheurs en Informatique."
                    buttonText="Découvrir Plus"
                    to="https://arsii.org/"
                  />
                </Grid>
                <Grid item>
                  <Item 
                    title="AISEC"
                    description="L'AIESEC, ou l'Association Internationale des Étudiants en Sciences Économiques et Commerciales (Association Internationale des Étudiants en Sciences Économiques et Commerciales), se distingue comme une organisation mondiale dirigée par des jeunes offrant des opportunités sans précédent de développement du leadership et d'expériences interculturelles."
                    buttonText="Découvrir Plus"
                    to="https://www.aiesec.org.tn/"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  );
}
