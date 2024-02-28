import React, { useState } from 'react';
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Data } from "./data"; // Remplacez Data par vos données réelles
import Sidebar from '../Sidebar';
import Topbar from '../../../Global/Topbar';
import { CssBaseline } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function GestionProfil() {
  const [rows, setRows] = useState(Data); // Utilisez vos données réelles ici

  const handleDeleteRow = (idToDelete) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== idToDelete));
    
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "cin",
      headerName: "CIN",
      flex: 1,
    },
    {
      field: "nom",
      headerName: "Nom/Prénom",
      flex: 1,
    },
    {
      field: "filiere",
      headerName: "Filiére",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleDeleteRow(params.row.id)}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", overflowX:"hidden"}}>
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
        <Box display="flex" flexGrow={1} overflow="auto" style={{ overflowX: "hidden" }}>
          <Sidebar flex="2" />
          <Box marginLeft="25%" />
          <Box
            width="calc(100% - 25%)"
            height="75vh"
            marginRight="5%"
            marginTop="4%"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                backgroundColor: "white", // Changez la couleur du fond du tableau en blanc
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#1976d2", // Changez la couleur de l'en-tête du tableau en bleu
                color: "white",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
              },
              "& .MuiDataGrid-virtualScroller": {},
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={rows}
              columns={columns}
              components={{
                Toolbar: GridToolbar,
              }}
              
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default GestionProfil;