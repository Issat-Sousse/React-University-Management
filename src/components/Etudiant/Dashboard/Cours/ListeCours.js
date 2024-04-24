import React, { useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DataCours } from "./dataCours";
import Sidebar from "../Sidebar";
import Topbar from "../../../Global/Topbar";
import { CssBaseline } from "@mui/material";
import { saveAs } from 'file-saver'; // Importez la fonction saveAs pour télécharger le fichier

function CoursListe() {
  const [rows] = useState(DataCours); // État pour les lignes de données

  const columnsCours = [
    { field: "titre", headerName: "Titre", flex: 1 },
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
  ];

  const downloadPdf = (title) => {
    // Ici, nous utilisons simplement un texte arbitraire pour simuler un fichier PDF
    const pdfContent = "Contenu du fichier PDF";
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    saveAs(blob, `${title}.pdf`);
  };

  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}>
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
            display={"block"}
            width="1400px"
            height="560px"
            marginRight="10%"
            marginLeft={"50px"}
            marginTop="4%"
            justifyItems={"center"}
            sx={{
              border: "none",
              backgroundColor: "white",
              borderRadius: 5,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
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
                  backgroundColor: "white",
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiDataGrid-columnHeader": {
                  backgroundColor: "#1976d2",
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
                rows={rows}
                columns={columnsCours}
                components={{
                  Toolbar: GridToolbar,
                }}
                onRowClick={(params) => downloadPdf(params.row.titre)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CoursListe;
