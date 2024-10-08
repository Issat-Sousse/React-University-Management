import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import Sidebar from "../Sidebar";
import Topbar from "../../../Global/Topbar";
import { CssBaseline } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
function AddCours() {
  const [matiere, setMatiere] = useState("");
  const [filiere, setFilière] = useState("");
  const [type, setType] = useState("");

  const handleChangeMatiere = (event) => {
    setMatiere(event.target.value);
  };

  const handleChangeFiliere = (event) => {
    setFilière(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  return (
    <div
      style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}
    >
      <CssBaseline />
      <Box
        sx={{
          background: "#F2F2F7",
          minHeight: "200vh",
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
            width="calc(75% - 25%)"
            height="520px"
            marginRight="10%"
            marginLeft={"140px"}
            marginTop="4%"
            justifyItems={"center"}
            sx={{
              border: "none",
              backgroundColor: "white", // Changez la couleur du fond du tableau en blanc
              borderRadius: 5,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box paddingTop={"30px"} display={"flex"} justifyContent={"center"}>
              <FormControl sx={{ m: 1, minWidth: 100, marginRight: "70px" }}>
                <InputLabel id="matiere-label">Matière</InputLabel>
                <Select
                  labelId="matiere-label"
                  id="matiere-select"
                  value={matiere}
                  onChange={handleChangeMatiere}
                  autoWidth
                  label="Matière"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Mini projet</MenuItem>
                  <MenuItem value={21}>e-commerce</MenuItem>
                  <MenuItem value={22}>entrepot de données</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100, marginRight: "70px" }}>
                <InputLabel id="filiere-label">Filière</InputLabel>
                <Select
                  labelId="filiere-label"
                  id="filiere-select"
                  value={filiere}
                  onChange={handleChangeFiliere}
                  autoWidth
                  label="Filière"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>ING-A2-01</MenuItem>
                  <MenuItem value={21}>ING-A2-02</MenuItem>
                  <MenuItem value={22}>ING-A2-03</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="type-select"
                  value={type}
                  onChange={handleChangeType}
                  autoWidth
                  label="Type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Cours</MenuItem>
                  <MenuItem value={21}>TD</MenuItem>
                  <MenuItem value={22}>TP</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              height={"250px"}
              width={"350px"}
              marginTop={5}
              marginLeft={"200px"}
              display={"flex"}
              justifyContent={"center"}
              sx={{ border: "2px solid grey" }}
            >
              <IconButton color="primary">
                <AddCircleIcon sx={{ width: "50px", height: "50px" }} />
              </IconButton>
            </Box>
            <Box display={"flex"} justifyContent={"center"} marginTop={5}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{ width: "350px" }}
                startIcon={<CloudUploadIcon />}
              >
                Ajouter
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default AddCours;
