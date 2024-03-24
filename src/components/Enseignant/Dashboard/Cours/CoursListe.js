import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DataCours } from "./dataCours"; // Importez vos données d'étudiants et d'enseignants
import Sidebar from "../Sidebar";
import Topbar from "../../../Global/Topbar";
import { CssBaseline } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CoursListe() {
  const [rows, setRows] = useState(DataCours); // État pour les lignes de données
  const handleDeleteRow = (idToDelete) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== idToDelete));
  };

  const columnsCours = [
    { field: "cours", headerName: "Cours", flex: 1 },

    {
      field: "matiere",
      headerName: "Matière",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
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
          <Box
            display={"block"}
            width="1400px"
            height="560px"
            marginRight="10%"
            marginLeft={"50px"}
            marginTop="4%"
            justifyItems={"center"}
            sx={{
              border: "none",
              backgroundColor: "white", // Changez la couleur du fond du tableau en blanc
              borderRadius: 5,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  float: "right",
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "10px",
                }}
              >
                Ajouter un cours
              </Button>
            </Box>
            <Box
              width="920px"
              height="480px"
              backgroundColor="white"
              marginTop="60px"
              marginLeft="10px"
              justifyItems={"center"}
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
                columns={columnsCours}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CoursListe;
