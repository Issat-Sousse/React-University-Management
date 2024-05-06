import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import { CssBaseline, Box } from "@mui/material";
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../../Global/Topbar';
import Item from '../../Global/item';

function ActualitesEtudiant() {
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
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <Item
                    title="Journée de sensibilisation"
                    description="02/01/2024 20:00"
                    buttonText="Plus de détail"
                    to="/clubs"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Répartition des salles d'examen par fillières"
                    description="02/01/2024 20:00"
                    buttonText="Plus de détail"
                    to="/4c"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Interdit de fumer"
                    description="02/01/2024 20:00"
                    buttonText="Plus de détail"
                    to="/incubateur"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Avis aux presidents des clubs de ISSATSO"
                    description="02/01/2024 20:00."
                    buttonText="Plus de détail"
                    to="/association"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Falling-Walls-Lab-Tunisia2024"
                    description="02/01/2024 20:00"
                    buttonText="Plus de détail"
                    to="/4c"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Jeunes Talents"
                    description="02/01/2024 20:00"
                    buttonText="Plus de détail"
                    to="/4c"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Item
                    title="Bourses doctorales"
                    description="02/01/2024 20:00"
                    buttonText="Plus de détail"
                    to="/4c"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default ActualitesEtudiant;