import React from 'react'

import {Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Topbar from '../../../Global/Topbar';
import Grid from '@mui/system/Unstable_Grid';
import { CssBaseline, Box } from "@mui/material";
import Item from '../../../Global/item';
const cours = [
  { id: 1, title: "JOURNÉE DE SENSIBILISATION", description: "02/01/2024 20:00" },
  { id: 2, title: "INTERDIT DE FUMER", description: "02/01/2024 20:00" },
  { id: 3, title: "RÉPARTITION DES SALLES D'EXAMEN PAR FILLIÈRES", description: "02/01/2024 20:00" },
  { id: 4, title: "FALLING-WALLS-LAB-TUNISIA2024", description: "02/01/2024 20:00" },
  { id: 5, title: "JEUNES TALENTS", description: "02/01/2024 20:00" },
  { id: 6, title: "BOURSES DOCTORALES", description: "02/01/2024 20:00" },
];
function GestionAct() {
  return (
    <React.Fragment>
    <div style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}>
      <CssBaseline />
      <Box sx={{ background: "#F2F2F7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Topbar />
        <Box display="flex" flexGrow={1} overflow="auto" style={{ overflow: "hidden" }}>
          <Sidebar flex="2" />
          <Box marginLeft="25%" />
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {cours.map((course) => (
              <Grid item xs={6}>
                <Item
                  title={course.title}
                  description={course.description}
                  buttonText="Modifier"
                  // to=
                />
              </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  </React.Fragment>
 
  )
}

export default GestionAct