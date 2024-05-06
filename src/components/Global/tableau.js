import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";


function tableau({ columns, rows ,link}) {
  const [dataRows, setDataRows] = useState(rows);

  const handleDeleteRow = (idToDelete) => {
    setDataRows((prevRows) => prevRows.filter((row) => row.id !== idToDelete));
  };

  const updatedColumns = [
    ...columns,
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
    <Box
      display={"block"}
      width="80%"
      height="100%"
      marginTop="4rem"
      marginRight="2rem"
      sx={{
        border: "none",
        backgroundColor: "white",
        borderRadius: 5,
        boxShadow: "0rem 20px 30px rgba(0, 0, 0, 0.1)",
        padding: 0,
        overflowX: "auto",
      }}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        marginBottom="0rem"
        marginRight="1rem"
        marginTop="0.4rem"
      >
        <Link to={link}>
          <Button variant="contained">Ajouter</Button>
        </Link>
      </Box>
      <Box
        width="100%"
        height="calc(100% - 48px)"
        backgroundColor="white"
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
          checkboxSelection
          rows={dataRows}
          columns={updatedColumns}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
}

export default tableau;
