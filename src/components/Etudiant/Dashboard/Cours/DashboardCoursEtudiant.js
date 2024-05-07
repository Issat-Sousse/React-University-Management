import React from 'react';
import {Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Cours from './Cours';
import Topbar from '../../../Global/Topbar';
import Grid from '@mui/system/Unstable_Grid';
import { CssBaseline, Box } from "@mui/material";
import Item from '../../../Global/item';
const cours = [
  { id: 1, title: "Math", description: "Description de cours Math" },
  { id: 2, title: "Base de données", description: "Description de cours Base de données" },
  { id: 3, title: "Systèmes d'exploitation", description: "Description de cours Systèmes d'exploitation" },
  { id: 4, title: "Réseaux", description: "Description de cours Réseaux" },
  { id: 5, title: "Programmation web", description: "Description de cours Programmation web" },
  { id: 6, title: "Programmation mobile", description: "Description de cours Programmation mobile" },
];

export default function DashboardCoursEtudiant() {
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
                    buttonText="Plus de détail"
                    to={`/cours/${course.id}`}
                  />
                </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </div>
    </React.Fragment>
   
  );
}
