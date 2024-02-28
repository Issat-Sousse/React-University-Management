import React, { useState } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DataEtudiants, DataEnseignants } from "./data"; // Importez vos données d'étudiants et d'enseignants
import Sidebar from '../Sidebar';
import Topbar from '../../../Global/Topbar';
import { CssBaseline } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function GestionProfil() {
  const [rows, setRows] = useState(DataEtudiants); // État pour les lignes de données
  const [selectedOption, setSelectedOption] = useState("etudiant"); // État pour l'option sélectionnée

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleDeleteRow = (idToDelete) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== idToDelete));
  };

  const columnsEtudiant = [
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
      headerName: "Filière",
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


  const columnsEnseignant =  [
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
      field: "departement",
      headerName: "Département",
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
      <Box display="flex" justifyContent="center" style={{ margin: "0 auto" }}>
        <Button
          variant={selectedOption === "etudiant" ? "contained" : "outlined"}
          onClick={() => handleOptionChange("etudiant")}
          style={{ marginRight: "5px" }}
        >
          Étudiant
        </Button>
        <Button
          variant={selectedOption === "enseignant" ? "contained" : "outlined"}
          onClick={() => handleOptionChange("enseignant")}
        >
          Enseignant
        </Button>
      </Box>
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
            {selectedOption === "etudiant" ? (
              <DataGrid
                checkboxSelection
                rows={rows}
                columns={columnsEtudiant}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            ) : (
              <DataGrid
                checkboxSelection
                rows={DataEnseignants}
                columns={columnsEnseignant}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default GestionProfil;