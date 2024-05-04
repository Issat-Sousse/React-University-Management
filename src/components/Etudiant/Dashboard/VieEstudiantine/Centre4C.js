import React from 'react';
import { CssBaseline, Box } from "@mui/material";
import Sidebar from '../Sidebar';
import Topbar from '../../../Global/Topbar';
import Images from '../../../Global/ImagesList';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Forum Entreprise Etudiant ISSATSO',
    description: '15/09/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Focus Day',
    description: '10/11/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Journée de recrutement',
    description: '12/12/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Journée Startup',
    description: '01/01/2024',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Forum Entreprise Etudiant ISSATSO',
    description: '15/09/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Focus Day',
    description: '10/11/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Journée de recrutement',
    description: '12/12/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Journée Startup',
    description: '01/01/2024',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Forum Entreprise Etudiant ISSATSO',
    description: '15/09/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Focus Day',
    description: '10/11/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Journée de recrutement',
    description: '12/12/2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Journée Startup',
    description: '01/01/2024',
  },
];


export default function Centre4C() {
  return (
    <React.Fragment>
      <div style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}>
        <CssBaseline />
        <Box sx={{ background: "#F2F2F7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Topbar />
          <Box display="flex" flexGrow={1} overflow="auto" style={{ overflowX: "hidden" }}>
            <Sidebar flex="2" />
            <Box marginLeft="25%" />

            <Images images={itemData} />
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
