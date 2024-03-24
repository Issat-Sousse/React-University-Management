import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Sidebar from "../Sidebar";
import Topbar from "../../../Global/Topbar";
import { CssBaseline } from "@mui/material";
import { IconButton } from "@mui/material";
function Cours() {
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
            width="calc(100% - 25%)"
            height="200px"
            marginRight="9%"
            marginTop="4%"
          >
            <Box
              paddingTop={"30px"}
              display={"flex"}
              justifyContent={"center"}
              sx={{
                border: "none",
                backgroundColor: "white", // Changez la couleur du fond du tableau en blanc
                borderRadius: 5,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FormControl sx={{ m: 1, minWidth: 100 }}>
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
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
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
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
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
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
              <Box>
                <IconButton color="primary">
                  <add_circle />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Cours;
